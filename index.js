
//saludos de bienvenida
let nombreUsuario = prompt("Bienvenido a Compumundo Hipermegared, cual es tu nombre?")
if (nombreUsuario =="") {
    alert ("No ingresaste un nombre!")
}  else if (nombreUsuario ==" "){
    alert ("Ingresaste un espacio!")
} else {
    alert ("Hola"+" "+nombreUsuario)
}

//Seleccion de uso
let uso = prompt("Buscas una computadora para Jugar, Trabajar o Estudiar?(escribi la palabra tal cual figura)")
if (uso ==""){
    alert (nombreUsuario+" "+"No ingreso nada")
} else if (uso ==" "){
    alert (nombreUsuario+" "+"ingreso un espacio")
} else if ((uso=="Jugar") || (uso=="Trabajar") || (uso=="Estudiar")){
    alert(nombreUsuario+" "+"buscas una PC para"+" "+uso)
} else {
    alert(nombreUsuario+" "+"seleccion incorrecta")
}

//seleccion de importe a gastar
let importe = prompt("cuanto queres gastar? (coloca el importe sin signos)")
if (importe==="null"){
    alert("Cancelo la operacion!")
} else if(importe===""){
    alert(nombreUsuario+" "+"no ingresaste ningun importe")
}else if(isNaN(importe)){
  alert(nombreUsuario+" "+"no ingresaste numeros")
} else if(importe==0){
    alert(nombreUsuario+" "+"pusiste $0!")
} else if(importe < 0){
    alert(nombreUsuario+" "+"pusiste un valor negativo!")
} else if(importe <= 100000){
    alert(nombreUsuario+" "+"es muy poco, no te alcanza para comprar una compu ):")
} else if(importe >= 100001 && importe <=150000 && uso=="Estudiar"){
    alert(nombreUsuario+" "+"por $125000, te podes llevar compuE1 con un micro AMD Ryzen 3 3200G, 8 gb ddr4, SSD de 240 gb con video integrado y kit de gabinete, teclado, parlantes y mouse o, por $145000, te podes llevar la compuE2 que viene con un Ryzen 5 3600G, 8 gb ddr4, SSD de 580gb con video integrado y kit de gabinete, teclado, parlantes y mouse. Cual te interesa mas compuE1 o compuE2?")
} else if(importe >= 150001 && uso=="Estudiar"){
    alert(nombreUsuario+" "+"con ese dinero, te podes armar una compu mas avanzada!")
} else if(importe >= 100001 && importe <=170000 && uso=="Trabajar"){
    alert(nombreUsuario+" "+"por $135000, te podes llevar compuT1 con un micro INTEL i3 10100, 8 gb ddr4, SSD de 240 gb con video integrado y kit de gabinete, teclado, parlantes y mouse o, por $150000, te podes llevar la compuT2 que viene con un INTEL i5 10400, 8 gb ddr4, SSD de 580gb con video integrado y kit de gabinete, teclado, parlantes y mouse. Cual te interesa mas compuT1 o compuT2?")
} else if(importe >= 150001 && uso=="Trabajar"){
    alert(nombreUsuario+" "+"con ese dinero, te podes armar una compu mas avanzada!.")
} else if(importe >=100001 && importe <=250000 && uso=="Jugar"){
    alert(nombreUsuario+" "+"por $175000 te llevas una compuJ1 con un micro ryzen 5 5600G, 16 gb ddr4, SSD 580 gb con video integrado con un kit que te incluye gabinete, teclado, parlantes y mouse o, si sos de los que les gusta jugar con los graficos a pleno, por solo $250000, llevate una compuJ2 que trae un ryzen 7 5700G, con 16 gb ddr 4, SSD 720 gb y con una RTX 3060 TI con un gabinete gamer junto a un teclado, mouse gamer y parlante potenciados. Te gusto la compuJ1 o te va la compuJ2?")
} else if(importe >= 250001 && uso=="Jugar"){
    alert(nombreUsuario+" "+"no contamos con una configuracion tan cara!!!")
} else{
    alert(nombreUsuario+" "+"no ingresaste ningun importe")
}

//seleccion de porducto
let compu = prompt(nombreUsuario+" "+"que compu te gusto? (coloca el nombre como figura)")
if (compu !="compuE1" && compu !="compuE2" && compu !="compuT1" && compu !="compuT2" && compu !="compuJ1" && compu !="compuJ2"){
    alert(nombreUsuario+" "+"escribiste mal el modelo!")
}

switch (compu){
    case "compuE1":
        alert(nombreUsuario+" "+"la"+" "+compu+" "+"cuesta $125000 y la podes pagar en cuotas con sin interes");
        break;
    case "compuE2":
        alert(nombreUsuario+" "+"la"+" "+compu+" "+"cuesta $145000 y la podes pagar en cuotas sin interes");
        break;
    case "compuT1":
            alert(nombreUsuario+" "+"la"+" "+compu+" "+"cuesta $135000 y la podes pagar en cuotas sin interes");
            break;
    case "compuT2":
            alert(nombreUsuario+" "+"la"+" "+compu+" "+"cuesta $150000 y la podes pagar en cuotas sin interes");
            break;
    case "compuJ1":
            alert(nombreUsuario+" "+"la"+" "+compu+" "+"cuesta $175000 y la podes pagar en cuotas sin interes");
            break;
    case "compuJ2":
            alert(nombreUsuario+" "+"la"+" "+compu+" "+"cuesta $250000 y la podes pagar en cuotas sin interes");
            break;
}
//ejemplos de cuotas sin interes

let ingreseImporte = parseInt(prompt(nombreUsuario+" "+"ingresa el importe, sin simbolos, de la compu seleccionada para saber en cuanto te quedaria cada cuotas. La podes abonar hasta en 12 pagos sin interes!"))

for(let i=12; i >=1; i = i-1){
    let resultado = ingreseImporte / i;
    console.log(ingreseImporte+" / "+ i + "="+" "+resultado)
}
//saludo

console.log(nombreUsuario+" "+"Muchas gracias!!!")







