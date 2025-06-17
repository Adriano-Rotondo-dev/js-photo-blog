//TODO: seleziono i DOM nodes necessari

const rowEl = document.getElementById("posts");

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
                                <div class="cardbody"> ${date} </div>
                            </div>
                        </div>`;
      //* aggiorno il DOM element con il MarkUp
      rowEl.insertAdjacentHTML("beforeend", postMarkUp);
    });
  })
  .catch((error) => {
    console.error(error);
  });
