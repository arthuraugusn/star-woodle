/* 

- OBJETIVO: Arquivo responsável por consumir a API SWAPI, retornando os planetas de Star Wars
- AUTOR: Arthur Augusto da Silva Nunes, Lucas Camilo Ramalho, Heitor Pontieiri
- DATA DE CRIAÇÃO: 20/10/2022
- VERSÃO: 2.0
- LOCAL API: https://github.com/akabab/starwars-api
- STATUS: Finalizado

*/

const getAllCharacters = async()=>{

    const url = 'https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/all.json'

    const response = await fetch(url)

    const characters = response.json()
    
    return characters
}

const getCharacter = async(idCharacter)=>{
    const url = `https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/id/${idCharacter}.json`

    const response = await fetch(url)

    const character = response.json()

    return character
}

export{
    getAllCharacters,
    getCharacter
}