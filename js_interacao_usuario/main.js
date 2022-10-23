'use strict'

document.getElementById('vader').addEventListener('mouseover', function(){
    const div= document.createElement('div') 

    const main= document.querySelector('.darth_vader')

    div.classList.add('teste')

    const kkk = main.querySelector('.teste')

    main.appendChild(div)

    if(kkk!= null){
        kkk.parentNode.removeChild(kkk)
    }
    
})  