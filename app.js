const url = 'https://rickandmortyapi.com/api/character'

let charactersContent = document.getElementById('characters')
let input = document.getElementById('search-input')

let characters = [] //variable para almacenar todos los personajes

const getCharacters = async () => {
  //consumo de personajes de rick and morty
  let _characters = await fetch(url)
    .then(response => response.json())
    .then(data => data.results);

  characters = _characters
  createCharacters(_characters)
}

const createCharacters = (data) => {
  for (let index = 0; index < data.length; index++) {
    const element = data[index];

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

const filterCharacters = (event) => {
  let filter = (event.target.value).toLowerCase();

  charactersContent.innerHTML = '';

  const filterNames = characters.map((element) => {
    if (element.name.toLowerCase().includes(filter)) {
      return element
    }
    return;
  }).filter(element => element);
  
  createCharacters(filterNames)
}

addEventListener('DOMContentLoaded', getCharacters)
input.addEventListener('keyup', filterCharacters)
