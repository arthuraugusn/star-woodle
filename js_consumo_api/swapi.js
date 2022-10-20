/* 

- OBJETIVO: Arquivo responsável por consumir a API SWAPI, retornando os planetas de Star Wars
- AUTOR: Arthur Augusto da Silva Nunes, Lucas Camilo Ramalho, Heitor Pontieiri
- DATA DE CRIAÇÃO: 20/10/2022
- VERSÃO: 1.0

*/

const getPlaneta = async(urlPlaneta)=>{

    const response = await fetch(urlPlaneta)

    const infosPlaneta = response.json()

    return infosPlaneta
}

export{
    getPlaneta
}