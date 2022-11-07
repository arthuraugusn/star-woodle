/* 

- OBJETIVO: Arquivo responsável por interagir com o usuário na página de Exibir Pesquisa
- AUTOR: Arthur Augusto da Silva Nunes, Lucas Camilo Ramalho, Heitor Pontieiri
- DATA DE CRIAÇÃO: 30/10/2022
- VERSÃO: 1.0

*/

'use strict'

import {getCharacter,getAllCharacters } from "../js_consumo_api/swapi.js"

const characters = await getAllCharacters()

const buscarIdCharacter= function(array,nome){
    let id
    array.forEach(baseP=>{
        if(baseP.name.toLowerCase() == nome.toLowerCase()){
            id = baseP.id
        }
    })

    return id
}

const criarDivsPersonagem = function(dados){
    const main = document.querySelector('main')
    const divArmazenarTudo = document.createElement('div')
    divArmazenarTudo.classList.add('div-armazenar-tudo')
    
    const divInfosGerais = document.createElement('div')
    divInfosGerais.classList.add('div-infos-gerais')
    const spanHeight = document.createElement('span')
    spanHeight.textContent=`Height:${dados.height}`
    const spanMass = document.createElement('span')
    spanMass.textContent = `Mass: ${dados.mass}`
    const spanGender = document.createElement('span')
    spanGender.textContent = `Gender:${dados.gender}`
    const spanHomeWorld = document.createElement('span')
    spanHomeWorld.textContent=`HomeWorld: ${dados.homeworld}`
    const spanSpecie = document.createElement('span')
    spanSpecie.textContent = `Species: ${dados.species}`
    const spanMasters = document.createElement('span')
    spanMasters.textContent = `Masters: ${dados.masters}`
    const spanApprenticies = document.createElement('span')
    spanApprenticies.textContent = `Apprentices: ${dados.apprentices}`

    divInfosGerais.appendChild(spanHeight)
    divInfosGerais.appendChild(spanMass)
    divInfosGerais.appendChild(spanGender)
    divInfosGerais.appendChild(spanHomeWorld)
    divInfosGerais.appendChild(spanSpecie)
    divInfosGerais.appendChild(spanMasters)
    divInfosGerais.appendChild(spanApprenticies)

    const a = document.createElement('a')
    a.href = dados.wiki

    const divPesquisa = document.createElement('div')
    divPesquisa.classList.add('div-pesquisa')
    const h2 = document.createElement('h2')
    h2.textContent = dados.name
    const img = document.createElement('img')
    img.classList.add('img-personagem')
    img.src = dados.image

    a.appendChild(img)
    divPesquisa.appendChild(h2)
    divPesquisa.appendChild(a)

    divArmazenarTudo.appendChild(divInfosGerais)
    divArmazenarTudo.appendChild(divPesquisa)

    main.appendChild(divArmazenarTudo)
}

let nomeCharacter = localStorage.getItem('character')

criarDivsPersonagem(await getCharacter(buscarIdCharacter(await getAllCharacters(),nomeCharacter)))