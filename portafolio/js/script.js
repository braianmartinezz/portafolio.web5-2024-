const slidetrack = document.querySelector(".slide-track")
const punto = document.querySelectorAll(".punto")

punto.forEach( (cadaPunto, i) =>{
    punto[i].addEventListener('click',()=>{
        let posicion = i;
        let operacion = posicion * -50
        
        slidetrack.style.transform = `translateX(${operacion}%)`
    })

    punto.forEach( (cadaPunto, i) =>{
        punto[i].classList.remove('activo')
    })
    punto[i].classList.add('activo')
})