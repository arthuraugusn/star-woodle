/* 

- OBJETIVO: Arquivo responsável por interagir com o usuário no index
- AUTOR: Arthur Augusto da Silva Nunes, Lucas Camilo Ramalho, Heitor Pontieiri
- DATA DE CRIAÇÃO: 23/10/2022
- VERSÃO: 1.0

*/

'use strict'

import {getAllCharacters} from "../js_consumo_api/swapi.js"

const charactersApi = await getAllCharacters()

document.getElementById('vader').addEventListener('click', ()=>{
    criarDivVader(consumirNomePersonagens(charactersApi))
    const caixaInfos = document.querySelector('.caixa-infos')
    caixaInfos.classList.toggle('caixa-sumir')
})

const consumirNomePersonagens = function (array) {
    let name = []

    array.forEach(baseArray => {
        name.push(baseArray.name)
    })

    let teste = name.slice(0, 10)

    return teste
}

const criarDivVader = function (dados) {
    const div = document.createElement('div')

    const a = document.createElement('a')
    
    a.textContent = dados

    const divVader = document.querySelector('.caixa-infos')

    div.classList.add('caixa-exemplos')

    const caixaExemplo = divVader.querySelector('.caixa-exemplos')

    div.appendChild(a)

    divVader.appendChild(div)

    if (caixaExemplo !== null) {
        caixaExemplo.parentNode.removeChild(caixaExemplo)
    }

    return divVader
}


const Keypress = async (event) =>{

    if(event.key == 'Enter'){ 
        localStorage.setItem(personagem,consumirNomePersonagens())
        consumirNomePersonagens()
        window.location.href('www.google.com')
    }
}

document.querySelector('').addEventListener('keypress', Keypress)


/* const goToCharactersPage = async ()=>{
    const inputSearch = document.getElementById('input-search').value
    const buscar = await buscarInfo(inputSearch)
}



const teste = await getCharacter(buscarInfo(nome))

console.log(teste) */