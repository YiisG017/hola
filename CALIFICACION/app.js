let cal = document.querySelector("#cal")
let nivel = document.querySelector("#nivel")


cal.oninput = () => { calcular() }

const calcular = () => {
  let vcal = parseInt(cal.value)
  
  document.querySelector("#vcal").innerHTML = vcal

  
    if (vcal >= 9) {
      nivel.innerHTML = "¡Excelente cARA DE BOLA!"
    }
    else if (vcal == 8){
      nivel.innerHTML = "Bueno"
    }
    else if (vcal == 7){
      nivel.innerHTML = "Un poquis bien"
    }
    else if (vcal == 6)  {
      nivel.innerHTML = "mmm puess bien"
    }
    else if (vcal == 5 )  {
      nivel.innerHTML = "No burriiiiis!"
    }else{
    nivel.innerHTML = "<div>"
    }
}