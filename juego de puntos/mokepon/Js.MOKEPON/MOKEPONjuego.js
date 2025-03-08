alert("¡ESTAS LISTO PARA INICIAR A JUGAR!")
alert("Please for continue choose (aceptar) ")

let ataque_jugador
let ataque_enemigo 
let vidas_jugador = 3
let vidas_enemigo = 3 

function iniciar_juego(){
    let section_Selecionar_ataque = document.getElementById("seleccionar-ataque")
    section_Selecionar_ataque.style.display ="none"

    let section_restart_button = document.getElementById("boton-reiniciar")
    section_restart_button.style.display = "none"


    let boton_mascota_jugador = document.getElementById("boton-mascota")
    boton_mascota_jugador.addEventListener("click", seleccionar_mascota_jugador)

    let boton_fuego = document.getElementById("boton-fuego")
    boton_fuego.addEventListener("click", ataque_fuego)
    let boton_agua = document.getElementById("boton-agua")
    boton_agua.addEventListener("click", ataque_agua)
    let boton_tierra = document.getElementById("boton-tierra")
    boton_tierra.addEventListener("click", ataque_tierra)

    let boton_reiniciar = document.getElementById("boton-reiniciar")
    boton_reiniciar.addEventListener("click",restart_game )
}

function seleccionar_mascota_jugador(){

    let section_Selecionar_mascota = document.getElementById("seleccionar-mascota")
    section_Selecionar_mascota.style.display ="none"

    let section_Selecionar_ataque = document.getElementById("seleccionar-ataque")
    section_Selecionar_ataque.style.display="block"

    let input_hipodoge = document.getElementById("hipodoge" )
    let input_capipepo = document.getElementById("capipepo" )
    let input_ratigueya = document.getElementById("ratigueya" )
    let input_langostelvis = document.getElementById("langostelvis" )
    let input_tucapalma = document.getElementById("tucapalma" )
    let input_pydos = document.getElementById("pydos" )
    let span_mascota_jugador = document.getElementById("mascota-jugador")



    if (input_hipodoge.checked){
        span_mascota_jugador.innerHTML =" hipodoge"
    } else if (input_capipepo.checked){
        span_mascota_jugador.innerHTML = " capipepo"
    } else if (input_ratigueya.checked){
        span_mascota_jugador.innerHTML = " ratigueya"
    } else if (input_langostelvis.checked){
        span_mascota_jugador.innerHTML = " langostelvis"
    } else if (input_tucapalma.checked){
        span_mascota_jugador.innerHTML = " tucapalma"
    } else if (input_pydos.checked){
        span_mascota_jugador.innerHTML = " pydos"
        
    } else {
        alert("selecciona una mascota")
    }

    seleccionar_mascota_enemigo()

    
}   
function seleccionar_mascota_enemigo(){
    let mascota_aleatorio = aleatorio(1,6)
    let span_mascota_enemigo = document.getElementById("mascota-enemigo")
    if (mascota_aleatorio ==1) {
        span_mascota_enemigo.innerHTML = " Hipodoge"
    } else if (mascota_aleatorio ==2) {
        span_mascota_enemigo.innerHTML = " Capipepo"
    } else if (mascota_aleatorio ==3) { 
        span_mascota_enemigo.innerHTML = " ratigueya"
    }  else if (mascota_aleatorio ==4) { 
        span_mascota_enemigo.innerHTML = " langostelvis"
    }  else if (mascota_aleatorio==5) { 
        span_mascota_enemigo.innerHTML = " tucapalma"
    } else  {
        span_mascota_enemigo.innerHTML = " pydos"
    }
}

function ataque_fuego(){
    ataque_jugador = "FUEGO"
    ataque_aleatorio_enemigo()

}
function ataque_agua(){
    ataque_jugador = "AGUA"
    ataque_aleatorio_enemigo()
}

function ataque_tierra(){
    ataque_jugador = "TIERRA"
    ataque_aleatorio_enemigo()
}

function ataque_aleatorio_enemigo(){
    let ataque_aletorio = aleatorio(1,3)

    if (ataque_aletorio ==1) {
        ataque_enemigo = "FUEGO"
    } else if (ataque_aletorio == 2){
        ataque_enemigo = "AGUA"
    } else {
        ataque_enemigo = "TIERRA"
    }
    combate() 

    
}

function combate() {

    let span_vidas_jugador = document.getElementById("vidas-jugador")
    let span_vidas_enemigo = document.getElementById("vidas-enemigo")

     if (ataque_enemigo == ataque_jugador){
        crear_mensajes("EMMPATEEEE😢😉🤞😎")

    } else if (ataque_jugador == "FUEGO" && ataque_enemigo == "TIERRA"){

        crear_mensajes("GANASTE✔🎇✔")
        vidas_enemigo --
        span_vidas_enemigo.innerHTML = vidas_enemigo
    } else if (ataque_jugador == "AGUA" && ataque_enemigo == "FUEGO" ){
        crear_mensajes("GANASTE✔💖🎶✔")
        vidas_enemigo --
        span_vidas_enemigo.innerHTML = vidas_enemigo
    } else if (ataque_jugador == "TIERRA" && ataque_enemigo == "AGUA" ){
        crear_mensajes("GANASTE✔✔")
        vidas_enemigo --
        span_vidas_enemigo.innerHTML = vidas_enemigo
    } else {
        crear_mensajes("PERDISTE❌❌")
        vidas_jugador --
        span_vidas_jugador.innerHTML = vidas_jugador

    }
    revisar_vidas()

}

function revisar_vidas() {
    if (vidas_enemigo == 0){
        crear_mensajes_final("COngratulation, You are the winner✔😎🤞😘✨🎁🎁(●'◡'●)(❁´◡`❁)🤑 ")   
    } else if ( vidas_jugador == 0 ) {
        crear_mensajes_final("i´m sorry for yoy, you are lost❌😢🤢🤔😐😑😭😭(╯°□°）╯︵ ┻━┻© ")
    } 

    

}
    

function crear_mensajes(resultado) {
    let section_mensajes = document.getElementById("mensajes")
    

    let parrafo = document.createElement("p")
    //crear elementos de html desde java 
    parrafo.innerHTML="Tu mascota ataco cón " + ataque_jugador + " la mascota del enemigo ataco cón " + ataque_enemigo + " = " + resultado

    section_mensajes.appendChild(parrafo)
    //para poder introducir el parrafo
}

function crear_mensajes_final(the_end) {
    let section_mensajes = document.getElementById("mensajes")
    

    let parrafo = document.createElement("p")
    //crear elementos de html desde java 
    parrafo.innerHTML = the_end

    section_mensajes.appendChild(parrafo)
    //para poder introducir el parrafo

    let boton_fuego = document.getElementById("boton-fuego")
    boton_fuego.disabled = true
    let boton_agua = document.getElementById("boton-agua")
    boton_agua.disabled = true
    let boton_tierra = document.getElementById("boton-tierra")
    boton_tierra.disabled= true
    let section_restart_button = document.getElementById("boton-reiniciar")
    section_restart_button.style.display = "block"
}

function restart_game() {
    location.reload()
    alert("vaaaaa chablal, ¿ganaste o perdiste ?")
    
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max-min + 1) + min)
}

window.addEventListener("load", iniciar_juego)