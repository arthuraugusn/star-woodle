'use strict'

import { getAllCharacters } from "../js_consumo_api/swapi.js"

const characters = await getAllCharacters()

const consumirArrayCharacters = function (array) {

    const div = document.createElement('div')
    div.classList.add('caixa-p')

    const img = document.createElement('img')
    img.src = array.image
    img.classList.add('a')

    const a = document.createElement('a')
    a.classList.add('link')
    a.textContent = array.name
    a.href = './exibirPesquisa.html'

    a.appendChild(img)
    div.appendChild(a)

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

document.querySelector('main').addEventListener('click', (event)=>{
    if(event.target.classList.contains('a')){
        localStorage.setItem('character', event.target.parentElement.textContent)
    }else{
        localStorage.setItem('character', event.target.textContent)
    }
})