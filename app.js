const url = 'https://rickandmortyapi.com/api/character'
let charactersContent = document.getElementById('characters')

const getCharacters = async () => {
  //consumo de personajes de rick and morty
  let characters = await fetch(url)
    .then(response => response.json())
    .then(data => data.results);


  for (let index = 0; index < characters.length; index++) {
    const element = characters[index];

    //creamos la card de cada uno de los personajes
    let div = document.createElement('div')
    div.className = 'card'

    //creamos la imagen y la añadimos al padre div
    let image = document.createElement('img')
    image.src = element.image
    div.appendChild(image)

    //creamos un contenedor para los nombres y generos
    let divData = document.createElement('div')
    let name = document.createElement('p')
    let gender = document.createElement('p')

    //propiedades del div
    divData.className = 'description'
    //guardamos los datos en sus respecticas variables
    name.textContent = `Name: ${element.name}`
    gender.textContent = `Gender: ${element.gender}`

    //añadimos cada uno a su padre
    div.appendChild(divData)
    divData.appendChild(name)
    divData.appendChild(gender)
    
    //su padre final
    charactersContent.appendChild(div)
  }
}

console.log(getCharacters());
