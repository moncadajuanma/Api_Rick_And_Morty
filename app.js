const url = 'https://rickandmortyapi.com/api/character'
let main = document.getElementById('characters');
let names = document.getElementById('names')
let genders = document.getElementById('genders')


const getCharacters = async () => {
    //consumo de personajes de rick and morty
    let characters = await fetch(url)
      .then(response => response.json())
      .then(data => data.results);
    
    let _names = []

    for (let index = 0; index < characters.length; index++) {
        const element = characters[index];
        _names.push(element.name)

        //crear imagenes de los personajes
        let img = document.createElement('img')
        img.src = element.image
        main.appendChild(img)
    }
    
    names.innerHTML = _names
}

console.log(getCharacters());