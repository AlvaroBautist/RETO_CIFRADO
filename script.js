function encriptar(){
    var frase = document.getElementById("textoEncriptado").value.toLowerCase();

// i = es para que tome letras mayusculas y minusculas
// g = tome en cuenta toda la linea o la oracion
// m = tome en cuenta multiples lineas

    var textoEncriptado = frase.replace(/e/img, "enter");
    var textoEncriptado = textoEncriptado.replace(/o/img, "ober");
    var textoEncriptado = textoEncriptado.replace(/i/img, "imes");
    var textoEncriptado = textoEncriptado.replace(/a/img, "ai");
    var textoEncriptado = textoEncriptado.replace(/u/img, "ufat");

    document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;
    document.getElementById("botonCopiar"),style.display = "show";
    document.getElementById("botonCopiar"),style.display = "inherit";
} 

function desencriptar(){
    var frase = document.getElementById("textoEncriptado").value.toLowerCase();

// i = es para que tome letras mayusculas y minusculas
// g = tome en cuenta toda la linea o la oracion
// m = tome en cuenta multiples lineas

    var textoEncriptado = frase.replace(/enter/img, "e");
    var textoEncriptado = textoEncriptado.replace(/ober/img, "o");
    var textoEncriptado = textoEncriptado.replace(/imes/img, "i");
    var textoEncriptado = textoEncriptado.replace(/ai/img, "a");
    var textoEncriptado = textoEncriptado.replace(/ufat/img, "u");

    document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;
} 

function copiar(){
    var contenido = document.querySelector("#textoDesencriptado");
    contenido.ariaSelected();
    document.execCommand("copy");
}