const boton = document.getElementById('traerApi')

boton.addEventListener('click', (datos) => {
    fetch ("https://dragonball-api.com/api/characters?name=goku").then
    ( Response => { 
        return Response.json()
    }).then( datos => {
        console.log(datos)
    })
    
});

