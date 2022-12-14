/* 

- OBJETIVO: Arquivo responsável por interagir com o usuário na página de Exibir Pesquisa
- AUTOR: Arthur Augusto da Silva Nunes, Lucas Camilo Ramalho, Heitor Pontieiri
- DATA DE CRIAÇÃO: 30/10/2022
- VERSÃO: 1.0

*/

'use strict'

import { getCharacter, getAllCharacters } from "../js_consumo_api/swapi.js"

const characters = await getAllCharacters()

const nomeCharacter = localStorage.getItem('character')

const buscarIdCharacter = function (array, nome) {
    let id
    array.forEach(baseP => {
        if (baseP.name.toLowerCase() == nome.toLowerCase()) {
            id = baseP.id
        }
    })

    return id
}

const infosTratativa = function (dados) {
    let span
    if (dados.class != undefined) {
        span = `Class: ${dados.class}`
    } else if(dados.masters != undefined){
        span = `Masters: ${dados.masters}`
    }else{
        span = ''
    }
    return span
}

const criarDivsPersonagem = function (dados) {
    const main = document.querySelector('main')

    const divArmazenarTudo = document.createElement('div')
    divArmazenarTudo.classList.add('div-armazenar-tudo')

    const divInfosGerais = document.createElement('div')
    divInfosGerais.classList.add('div-infos-gerais')

    const spanHeight = document.createElement('span')
    spanHeight.textContent = `Height:${dados.height}`

    const spanMass = document.createElement('span')
    if(dados.mass != undefined){
        spanMass.textContent = `Mass: ${dados.mass}`
    }

    const spanGender = document.createElement('span')
    spanGender.textContent = `Gender:${dados.gender}`

    const spanHomeWorld = document.createElement('span')
    spanHomeWorld.textContent = `HomeWorld: ${dados.homeworld}`

    const spanSpecie = document.createElement('span')
    spanSpecie.textContent = `Species: ${dados.species}`

    const spanMastersClass = document.createElement('span')
    spanMastersClass.textContent = infosTratativa(dados)

    divInfosGerais.appendChild(spanHeight)
    divInfosGerais.appendChild(spanMass)
    divInfosGerais.appendChild(spanGender)
    divInfosGerais.appendChild(spanHomeWorld)
    divInfosGerais.appendChild(spanSpecie)
    divInfosGerais.appendChild(spanMastersClass)

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

const busca =buscarIdCharacter(characters, nomeCharacter)

if(busca == undefined){
    window.location.href = './todosPersonages.html'
}else{
    criarDivsPersonagem(await getCharacter(buscarIdCharacter(characters, nomeCharacter)))
}

const keyPressReload = async (event) => {

    if (event.key == 'Enter') {
        localStorage.setItem('character', event.target.value)
        window.location.reload()
    }
}

document.getElementById('re-search').addEventListener('keypress', keyPressReload)