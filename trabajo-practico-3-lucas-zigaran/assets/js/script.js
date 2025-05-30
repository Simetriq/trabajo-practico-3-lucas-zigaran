const boton = document.getElementById('traerApi');
const personaje = document.getElementById('personajes');

const forma = document.getElementById('formbuscador');
boton.addEventListener('click', async() => {
     await fetch ("https://dragonball-api.com/api/characters").then
    ((response) => { 
        return response.json()
    }).then((datos) => {
        console.log(datos)
        personaje.innerHTML=""
        datos.items.forEach((character)=> {
            personaje.innerHTML+=`
                <div class="col-3 pb-2 d-flex justify-content-center" data-id=${character.id}>
            <div class="card">
              <img
                class="card-img-top"
                src=${character.image}
              />
              <div class="card-body">
                <h5 class="card-title">${character.name}</h5>
                <p class="card-text">${character.race} - ${character.gender}</p>
                <button class="btn btn-success btn-ver-detalles">Ver más</button>
              </div>
            </div>
          </div>`
        });
    })
});

forma.addEventListener ('submit', async(event)=> {
    event.preventDefault()
    const buscador = document.getElementById('buscador').value;
    try {
          const response = await fetch (`https://dragonball-api.com/api/characters?name=${buscador}`)
    const data = await response.json()
     data.forEach((character)=> {
            personaje.innerHTML=`
                <div class="col-3 pb-2 d-flex justify-content-center" data-id=${character.id}>
            <div class="card">
              <img
                class="card-img-top"
                src=${character.image}
              />
              <div class="card-body">
                <h5 class="card-title">${character.name}</h5>
                <p class="card-text">${character.race} - ${character.gender}</p>
                <button class="btn btn-success btn-ver-detalles">Ver más</button>
              </div>
            </div>
          </div>`
        });
    } catch (error) {
      alert("Ocurrió un error al consultar la API.")
    }
});
