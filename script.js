const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".text-mensaje");
const copia = document.querySelector(".copiar");
let modal = document.querySelector('.Pop-up');
let closeBtn = document.querySelector('.Cerrar');

 
function validarTexto(){
    let textoEscrito = document.querySelector(".text-area").value;
    let validador = textoEscrito.match(/^[a-z]*$/);
    if(!validador || validador === 0) {  
        document.getElementsByClassName("parrafo").innerHTML = "Solo son permitidas letras minúsculas y sin acentos" 
        modal.style.display= "block";        
        return true;
    }
    if(textoEscrito === ""){
        document.getElementsByClassName("parrafo").innerHTML = "Ningun texto ingresado" 
        modal.style.display= "block"; 
    }
}

closeBtn.addEventListener("click", () => {
    modal.style.display ="none";
    location.reload();
}
)

closeBtn.addEventListener("click", () => {
    modal.style.display ="none";
 }
)

function btnEncriptar(){
    if(!validarTexto()) {
        const textoEncriptado = encriptar(textArea.value)
        mensaje.value= textoEncriptado        
        mensaje.style.backgroundImage = "none"
        textArea.value = "";   
    }
}

//Laves de encriptacion
// `La letra "e" es convertida para "enter"`
// `La letra "i" es convertida para "imes"`
// `La letra "a" es convertida para "ai"`
// `La letra "o" es convertida para "ober"` 
// `La letra "u" es convertida para "ufat"`

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }
    }
    return stringEncriptada
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";    
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1] , matrizCodigo[i][0])
        }
    }
    return stringDesencriptada
}

function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    document.getElementById("parrafo").innerHTML = "*** Texto Copiado ***" ;
    modal.style.display= "block";  
    mensaje.value = "";
  
  
}



