//TODO: seleziono i DOM nodes necessari

const rowEl = document.getElementById("posts");
const overlayBtnEl = document.getElementById("close_btn");
const overlayImgEl = document.getElementById("overlay_img")
const banner = document.getElementById("banner");

//* creo la variabile per salvare l'endpoint dell'API https://lanciweb.github.io/demo/api/pictures/

const endpoint = "https://lanciweb.github.io/demo/api/pictures/";

//* inizializzo l'AJAX request all'endpoint e mi assicuro che funzioni

fetch(endpoint)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    //* creo un ciclo forEach per ciclare al suo interno e prendo il singolo elemento
    data.forEach((post) => {
      //*destrutturo l'obj restituito dall'AJAX request per ottenere dateEl e imgEl variables
      const { date, url, title } = post;
      //* creo il MarkUp da usare per la singola col e card
      //* rimpiazzo i placeholder con dateEl e imgEl variables
      const postMarkUp = `<div class="col-3 col-md-5 col-sm-12">
                            <div class="card">
                                <img class ="pin" src="./assets/img/pin.svg" alt="pin_img">
                                <div class="card-header">
                                    <img class ="post_img" src="${url}" alt="${title}">
                                </div>
                                <div class="cardbody">
                                <p> ${title} </p>
                                <p> ${date} </p>
                                </div>
                            </div>
                        </div>`;
      //* aggiorno il DOM element con il MarkUp
      rowEl.insertAdjacentHTML("beforeend", postMarkUp);
    });
    //*salvo il DOM node della card per applicare la funzione a ogni card 
    const postCardEl = document.querySelectorAll(".card");
    //*inizializzo il ciclo for Each per applicare a ogni card l'eventListener 
    postCardEl.forEach((card) => {
      card.addEventListener("click", () => {
        //*recupero la singola immagine di ogni post e sostituisco il placeholder overlay con la postImgEl
        const postImgEl= card.querySelector(".post_img")
        overlayImgEl.alt = postImgEl.alt
        overlayImgEl.src = postImgEl.src
        document.getElementById("overlay").style.display = "flex";
      }); 
      //*applico l'eventListener di chiusura (placeholder atm)
      overlayBtnEl.addEventListener("click", () => {
        document.getElementById("overlay").style.display = "none";
      });
    });
  })
  .catch((error) => {
    console.error(error);
  });


