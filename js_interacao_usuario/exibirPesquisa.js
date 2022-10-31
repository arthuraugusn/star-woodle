'use strict'

import {getCharacter,getAllCharacters } from "../js_consumo_api/swapi.js"

let arrayAllCharacters = await getAllCharacters()

const buscarInfo= function(array,nome){
    let id
    array.forEach(baseP=>{
        if(baseP.name.toLowerCase() == nome.toLowerCase()){
            id = baseP.id
        }
    })

    return id
}

let nomeRecebidoOutraPagina = 'Obi-Wan Kenobi'

const criarDivsPersonagem = function(dados){
    const main = document.querySelector('main')
    const divArmazenarTudo = document.createElement('div')
    divArmazenarTudo.classList.add('div-armazenar-tudo')
    
    const divInfosGerais = document.createElement('div')
    divInfosGerais.classList.add('div-infos-gerais')
    const span = document.createElement('span')
    span.textContent = `Height: ${dados.height} Mass: ${dados.mass}
                        Gender: ${dados.gender} HomeWorld: ${dados.homeworld} Afiliações: ${dados.affiliations}`
    divInfosGerais.appendChild(span)

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

criarDivsPersonagem(await getCharacter(buscarInfo(arrayAllCharacters,nomeRecebidoOutraPagina)))