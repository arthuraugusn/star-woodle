'use strict'

import { getAllCharacters } from "../js_consumo_api/swapi.js"

const characters = await getAllCharacters()

const consumirArrayCharacters = function (array) {

    const div = document.createElement('div')
    div.classList.add('caixa-p')

    const img = document.createElement('img')
    img.src = array.image
    
    const name = document.createElement('h3')
    name.textContent =array.name

    div.appendChild(name)
    div.appendChild(img)

    return div
}
const pesquisar = async () => {
    const galeria = document.querySelector('main')
    const tagImg = characters.map(consumirArrayCharacters)
    galeria.replaceChildren(...tagImg)
}

pesquisar()

const keyPressReload = async (event) => {

    if (event.key == 'Enter') {
        localStorage.setItem('character', event.target.value)
        window.location.href = './exibirPesquisa.html'
    }
}

document.getElementById('re-search').addEventListener('keypress', keyPressReload)