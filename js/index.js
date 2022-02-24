
  
    const container = document.querySelector('.contenedor')
    //a las urls de las api se le llama endpoints
    // Aquí realizamos un la consulta de la promesa, esperando su respuesta asíncrona

    const urlPersonajes = 'https://rickandmortyapi.com/api/character/';
    
    //necesito una funcion que reciba un endpoint y nos devuelva la info que trae
    function consultaApi(api) {
     //fetch es una promesa y necesita un endpoint  
        fetch(api)
        .then( respuesta => respuesta.json())// Devuelvo a respuesta una promesa json
        .then(data =>{    //manipulamos la respuesta 
            //trabajamos con la info ya parseada
        
            let listado = data.results;
            listado.forEach(elemento => {
                renderizarTarjeta(elemento)
            });
        })
        .catch( error => console.log(error))
    
    }
    
    consultaApi(urlPersonajes);
    
    function renderizarTarjeta(personaje) {
        container.innerHTML += `
            <div class="tarjeta">
                <img src="${personaje.image}" alt="">
                <h2>${personaje.name}</h2>
                <p>Especie:${personaje.species}</p>
            </div>`
    };
