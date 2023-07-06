let modulo=document.querySelector("#modulo");
let ingles=document.querySelector("#ingles");
let fisica=document.querySelector("#fisica");
let ecologia=document.querySelector("#ecologia");
let calculo=document.querySelector("#calculo");
let res=document.querySelector("#promedio");

modulo.oninput=()=>{calcular();}
ingles.oninput=()=>{calcular();}
fisica.oninput=()=>{calcular();}
calculo.oninput=()=>{calcular();}
ecologia.oninput=()=>{calcular();}

const calcular=()=>{
  document.querySelector("#cm").innerHTML=modulo.value;
  document.querySelector("#ci").innerHTML=ingles.value;
  document.querySelector("#cf").innerHTML=fisica.value;
  document.querySelector("#ce").innerHTML=ecologia.value;
  document.querySelector("#cc").innerHTML=calculo.value;
  let m=parseFloat(modulo.value)
  let i=parseFloat(ingles.value)
  let f=parseFloat(fisica.value)
  let e=parseFloat(ecologia.value)
  let c=parseFloat(calculo.value)
  let promedio=(m+i+f+e+c)/5;
  res.innerHTML=promedio.toFixed(1);
  if(promedio>5&&promedio<7){
    res.className="bg-danger text-white";
  }else if(promedio>=7&& promedio<9){
    res.className="bg-warning text-white";
  }else{
    res.className="bg-success text-white";
  }
  
}