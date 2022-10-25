/* 

- OBJETIVO: Arquivo responsável por interagir com o usuário no index
- AUTOR: Arthur Augusto da Silva Nunes, Lucas Camilo Ramalho, Heitor Pontieiri
- DATA DE CRIAÇÃO: 23/10/2022
- VERSÃO: 1.0

*/

import {getAllCharacters} from "../js_consumo_api/swapi.js"

'use strict'

const criarDivVader = function(){
    const div= document.createElement('div') 

    const divVader= document.querySelector('.caixa_infos')

    div.classList.add('caixa_exemplos')

    const caixaExemplo = divVader.querySelector('.caixa_exemplos')

    divVader.appendChild(div)

    if(caixaExemplo!== null){
        caixaExemplo.parentNode.removeChild(caixaExemplo)
    }

    return divVader
    
}

document.getElementById('vader').addEventListener('click', function(){
    criarDivVader()

})