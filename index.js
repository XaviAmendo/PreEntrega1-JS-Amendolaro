
//saludos de bienvenida
//let nombreUsuario = prompt("Bienvenido a The Best Hard, cual es tu nombre?")
//if (nombreUsuario =="") {
//    alert ("No ingresaste un nombre!")
//}  else if (nombreUsuario ==" "){
//    alert ("Ingresaste un espacio!")
//} else {
//    alert ("Hola"+" "+nombreUsuario)
//}

//Seleccion de uso
//let uso = prompt("Buscas una computadora para Jugar, Trabajar o Estudiar?(escribi la palabra tal cual figura)")
//if (uso ==""){
//    alert (nombreUsuario+" "+"No ingreso nada")
//} else if (uso ==" "){
//    alert (nombreUsuario+" "+"ingreso un espacio")
//} else if ((uso=="Jugar") || (uso=="Trabajar") || (uso=="Estudiar")){
//    alert(nombreUsuario+" "+"buscas una PC para"+" "+uso)
//} else {
//    alert(nombreUsuario+" "+"seleccion incorrecta")
//}

//seleccion de importe a gastar
//let importe = prompt("cuanto queres gastar? (coloca el importe sin signos)")
//if (importe==="null"){
//    alert("Cancelo la operacion!")
//} else if(importe===""){
//    alert(nombreUsuario+" "+"no ingresaste ningun importe")
//}else if(isNaN(importe)){
//  alert(nombreUsuario+" "+"no ingresaste numeros")
//} else if(importe==0){
//    alert(nombreUsuario+" "+"pusiste $0!")
//} else if(importe < 0){
//    alert(nombreUsuario+" "+"pusiste un valor negativo!")
//} else if(importe <= 100000){
//    alert(nombreUsuario+" "+"es muy poco, no te alcanza para comprar una compu ):")
//} else if(importe >= 100001 && importe <=150000 && uso=="Estudiar"){
//    alert(nombreUsuario+" "+"por $125000, te podes llevar compuE1 con un micro AMD Ryzen 3 3200G, 8 gb ddr4, SSD de 240 gb con video integrado y kit de gabinete, teclado, parlantes y mouse o, por $145000, te podes llevar la compuE2 que viene con un Ryzen 5 3600G, 8 gb ddr4, SSD de 580gb con video integrado y kit de gabinete, teclado, parlantes y mouse. Cual te interesa mas compuE1 o compuE2?")
//} else if(importe >= 150001 && uso=="Estudiar"){
//    alert(nombreUsuario+" "+"con ese dinero, te podes armar una compu mas avanzada!")
//} else if(importe >= 100001 && importe <=170000 && uso=="Trabajar"){
//    alert(nombreUsuario+" "+"por $135000, te podes llevar compuT1 con un micro INTEL i3 10100, 8 gb ddr4, SSD de 240 gb con video integrado y kit de gabinete, teclado, parlantes y mouse o, por $150000, te podes llevar la compuT2 que viene con un INTEL i5 10400, 8 gb ddr4, SSD de 580gb con video integrado y kit de gabinete, teclado, parlantes y mouse. Cual te interesa mas compuT1 o compuT2?")
//} else if(importe >= 150001 && uso=="Trabajar"){
//    alert(nombreUsuario+" "+"con ese dinero, te podes armar una compu mas avanzada!.")
//} else if(importe >=100001 && importe <=250000 && uso=="Jugar"){
//    alert(nombreUsuario+" "+"por $175000 te llevas una compuJ1 con un micro ryzen 5 5600G, 16 gb ddr4, SSD 580 gb con video integrado con un kit que te incluye gabinete, teclado, parlantes y mouse o, si sos de los que les gusta jugar con los graficos a pleno, por solo $250000, llevate una compuJ2 que trae un ryzen 7 5700G, con 16 gb ddr 4, SSD 720 gb y con una RTX 3060 TI con un gabinete gamer junto a un teclado, mouse gamer y parlante potenciados. Te gusto la compuJ1 o te va la compuJ2?")
//} else if(importe >= 250001 && uso=="Jugar"){
//    alert(nombreUsuario+" "+"no contamos con una configuracion tan cara!!!")
//} else{
//    alert(nombreUsuario+" "+"no ingresaste ningun importe")
//}

//seleccion de porducto
//let compu = prompt(nombreUsuario+" "+"que compu te gusto? (coloca el nombre como figura)")
//if (compu !="compuE1" && compu !="compuE2" && compu !="compuT1" && compu !="compuT2" && compu !="compuJ1" && compu !="compuJ2"){
//    alert(nombreUsuario+" "+"escribiste mal el modelo!")
//}

//switch (compu){
//    case "compuE1":
//        alert(nombreUsuario+" "+"la"+" "+compu+" "+"cuesta $125000 y la podes pagar en cuotas con sin interes");
//        break;
//    case "compuE2":
//        alert(nombreUsuario+" "+"la"+" "+compu+" "+"cuesta $145000 y la podes pagar en cuotas sin interes");
//        break;
//    case "compuT1":
//            alert(nombreUsuario+" "+"la"+" "+compu+" "+"cuesta $135000 y la podes pagar en cuotas sin interes");
//            break;
//    case "compuT2":
//            alert(nombreUsuario+" "+"la"+" "+compu+" "+"cuesta $150000 y la podes pagar en cuotas sin interes");
//            break;
//    case "compuJ1":
//            alert(nombreUsuario+" "+"la"+" "+compu+" "+"cuesta $175000 y la podes pagar en cuotas sin interes");
//            break;
//    case "compuJ2":
//            alert(nombreUsuario+" "+"la"+" "+compu+" "+"cuesta $250000 y la podes pagar en cuotas sin interes");
//            break;
//}
//ejemplos de cuotas sin interes

//let ingreseImporte = parseInt(prompt(nombreUsuario+" "+"ingresa el importe, sin simbolos, de la compu seleccionada para saber en cuanto te quedaria cada cuotas. La podes abonar hasta en 12 pagos sin interes!"))

//for(let i=12; i >=1; i = i-1){
//    let resultado = ingreseImporte / i;
//    console.log(ingreseImporte+" / "+ i + "="+" "+resultado)
//}
//saludo

//console.log(nombreUsuario+" "+"Muchas gracias!!!")


//Objetos

class Combo{
    constructor(modelo, micro, memoria, almacenamiento, video, kit, precio){
        this.modelo=modelo
        this.micro=micro
        this.memoria=memoria
        this.almacenamiento=almacenamiento
        this.video=video
        this.kit=kit
        this.precio=precio
    }
    mostrarModelo(){
        console.log("El modelo seleccionado es: "+ this.modelo)
    }
}

const compu1 = new Combo(
    "CompuE1",
    "Ryzen 3 3200G",
    "8 GB",
    "240 GB",
    "On Board",
    "Si",
    "$125000"
)

const compu2 = new Combo(
    "CompuE2",
    "Ryzen 5 3600G",
    "8 GB",
    "580 GB",
    "On Board",
    "Si",
    "$145000"
)

const compu3 = new Combo(
    "CompuT1",
    "i3 10100",
    "8 GB",
    "240 GB",
    "On Board",
    "Si",
    "$135000"
)

const compu4 = new Combo(
    "CompuT2",
    "i5 10400",
    "8 GB",
    "580 GB",
    "On Board",
    "Si",
    "$150000"
)

const compu5 = new Combo(
    "CompuJ1",
    "Ryzen 5 5600G",
    "16 GB",
    "580 GB",
    "On Board",
    "Si",
    "$175000"
)

const compu6 = new Combo(
    "CompuJ2",
    "Ryzen 7 5700G",
    "16 GB",
    "720 GB",
    "RTX 3060 TI",
    "Si",
    "$250000"
)

console.log(compu1, compu2, compu3, compu4, compu5, compu6)
compu3.mostrarModelo()

//array

const arrayCompu = [
    compu1, 
    compu2,
    compu3,
    compu4,
    compu5,
    compu6,
]

console.log(arrayCompu)

for ( const i of arrayCompu){
    console.log(i.modelo)
    console.log(i.micro)
}

//DOM boton

const buy = document.getElementById('buy')
buy.innerText = 'Seleccionar'

buy.style.backgroundColor = 'red'
buy.style.color ='white'
buy.style.border = '1px solid black'
buy.style.borderRadius = '10px'
buy.style.boxShadow = '3px 3px 1px black'
buy.style.alignItems = 'center'
buy.style.margin = '150px 0px 0px 130px'

//eventos boton 1
buy.addEventListener('click', hizoClip)
function hizoClip(){
    alert('Seleccionaste el combo CompuE1')
}

//boton 2
const buy2 = document.getElementById('buy2')
buy2.innerText = 'Seleccionar'

//eventos boton 2
buy2.addEventListener('click', hizoClips)
function hizoClips(){
    alert('Seleccionaste el combo CompuE2')
}


buy2.style.backgroundColor = 'red'
buy2.style.color ='white'
buy2.style.border = '1px solid black'
buy2.style.borderRadius = '10px'
buy2.style.boxShadow = '3px 3px 1px black'
buy2.style.alignItems = 'center'
buy2.style.margin = '150px 0px 0px 130px'


//DOM footer

const futer = document.querySelector('p#pie');
const anio = new Date().getFullYear();
futer.innerHTML = `Xavier Amendolaro | 3er Entrega | JavaScript | ${anio}`
pie.style.backgroundColor = 'grey'

//Json

localStorage.setItem('arrayCompu', JSON.stringify(arrayCompu))

//navbar

const navB = document.getElementById('navB')
const navBar = document.createElement('nav')
const uls = document.createElement('ul')
const links = [
    {
        page: 'index',
        link: 'Inicio'
    },
    {
        page: 'products',
        link: 'Productos'
    },
    {
        page: 'contacts',
        link: 'Contacto'
    }
]

navBar.classList = 'navbar navbar-expand-lg navbar-light bg-light'
navB.classList = 'container-fluid'
uls.classList = 'navbar-nav'

navB.appendChild(navBar)
navBar.appendChild(uls)

links.forEach((nombre) => {
    uls.innerHTML += `
                    <li class="nav-item">
                        <a class="nav-link" href="/${nombre.page}.html">${nombre.link}</a> 
                    </li>
    `
})