/* 

- OBJETIVO: Arquivo responsável por interagir com o usuário no index
- AUTOR: Arthur Augusto da Silva Nunes, Lucas Camilo Ramalho, Heitor Pontieiri
- DATA DE CRIAÇÃO: 23/10/2022
- VERSÃO: 1.0

*/

'use strict'

import {getAllCharacters} from "../js_consumo_api/swapi.js"

const characters = await getAllCharacters()

document.getElementById('vader').addEventListener('click', ()=>{
    criarDivVader(consumirArrayCharacters(characters))
    const caixaInfos = document.querySelector('.caixa-infos')
    caixaInfos.classList.toggle('caixa-sumir')
})

const consumirArrayCharacters = function (array) {
    let name = []

    array.forEach(baseArray => {
        name.push(baseArray.name)
    })

    let nomePersonagem = name.slice(0, 1)
    let frase = `Try ${nomePersonagem} and have a great surprise!` 

    return frase
}

const criarDivVader = function (dados) {
    
    const div = document.createElement('div')
    const divT = document.createElement('div')

    const a = document.createElement('a')
    
    a.textContent = dados

    const divVader = document.querySelector('.caixa-infos')

    div.classList.add('caixa-exemplos')
    divT.classList.add('triangulo')

    const caixaExemplo = divVader.querySelector('.caixa-exemplos')
    const trianguloCaixa = divVader.querySelector('.triangulo')
    div.appendChild(a)

    divVader.appendChild(div)
    divVader.appendChild(divT)

    if (caixaExemplo !== null) {
        caixaExemplo.parentNode.removeChild(caixaExemplo)
        trianguloCaixa.parentNode.removeChild(trianguloCaixa)
    }

    return divVader
}


const keyPress = async (event) =>{

    if(event.key == 'Enter'){ 
        localStorage.setItem('character', event.target.value)
        window.location.href='./page/exibirPesquisa.html'
    }
}

document.querySelector('.input').addEventListener('keypress', keyPress)