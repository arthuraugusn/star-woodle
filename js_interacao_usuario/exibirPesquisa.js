'use strict'

import { getCharacter } from "../js_consumo_api/swapi.js"

const criarDivsPersonagem = function(dados){
    const main = document.querySelector('main')
    const divArmazenarTudo = document.createElement('div')
    divArmazenarTudo.classList.add('div-armazenar-tudo')
    
    const divInfosGerais = document.createElement('div')
    divInfosGerais.classList.add('div-infos-gerais')
    const span = document.createElement('span')
    let teste = {}

    span.textContent = `Height: ${dados.height} Mass: ${dados.mass}
                        Gender: ${dados.gender} HomeWorld: ${dados.homeworld} Teste: ${dados.masters}`

    divInfosGerais.appendChild(span)

    const divPesquisa = document.createElement('div')
    divPesquisa.classList.add('div-pesquisa')
    const h2 = document.createElement('h2')
    h2.textContent = dados.name
    const img = document.createElement('img')
    img.classList.add('img-personagem')
    img.src = dados.image

    divPesquisa.appendChild(h2)
    divPesquisa.appendChild(img)

    divArmazenarTudo.appendChild(divInfosGerais)
    divArmazenarTudo.appendChild(divPesquisa)

    main.appendChild(divArmazenarTudo)
}

criarDivsPersonagem(await getCharacter(13))