/* 

- OBJETIVO: Arquivo responsável por interagir com o usuário no index
- AUTOR: Arthur Augusto da Silva Nunes, Lucas Camilo Ramalho, Heitor Pontieiri
- DATA DE CRIAÇÃO: 23/10/2022
- VERSÃO: 1.0

*/

import {
    getAllCharacters
} from "../js_consumo_api/swapi.js"

'use strict'

let charactersApi = await getAllCharacters()

document.getElementById('vader').addEventListener('click', function (event) {
    
    criarDivVader(consumirNomePersonagens(charactersApi))
    console.log(charactersApi)
})

const clickVader = function () {

    const div_vader = document.querySelector('.caixa_exemplos')

    div_vader.addEventListener('click'),function (event) {
            if (event.target.classList == '.caixa_exemplos')
                event.target.classList.toggle('.esconder_caixa')
        }
}




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

    const divVader = document.querySelector('.caixa_infos')


    div.classList.add('caixa_exemplos')

    const caixaExemplo = divVader.querySelector('.caixa_exemplos')

    div.appendChild(a)

    divVader.appendChild(div)

    if (caixaExemplo !== null) {
        caixaExemplo.parentNode.removeChild(caixaExemplo)
    }

    return divVader
}