//Función para encriptar el texto
function encrypt() {
  // Recibe el texto desde el "input" textarea
  let text = document.getElementById("input").value.toLowerCase();

  // Reemplaza las letras minúsculas con tílde a su forma sin tilde
  let textSinTildes = text.replace(/é/igm, "e").replace(/í/igm, "i").replace(/á/igm, "a").replace(/ó/igm, "o").replace(/ú/igm, "u");

  // Reemplaza las letras individuales a caráteres
  let newText = textSinTildes.replace(/e/igm,"enter").replace(/i/igm,"imes").replace(/a/igm,"ai").replace(/o/igm,"ober").replace(/u/igm,"ufat");

  return newText;
}

//Función para desencriptar el texto 

function decrypt() {
  // Recibe el texto desde el "input" textarea  
  var text = document.getElementById("input").value.toLowerCase();

  // Reemplaza las letras minúsculas con tílde a su forma sin tilde
  var textSinTildes = text.replace(/é/igm, "e").replace(/í/igm, "i").replace(/á/igm, "a").replace(/ó/igm, "o").replace(/ú/igm, "u");
  
  // Reemplaza los carácteres a letras individuales
  var newText = textSinTildes.replace(/enter/igm,"e").replace(/imes/igm,"i").replace(/ai/igm,"a").replace(/ober/igm,"o").replace(/ufat/igm,"u");

  return newText;
}

//Función para mostrar el texto encriptado en la zona designada
function showEncryptText() {
  
  document.getElementById("rectangle-processed-text").textContent = encrypt();

}

//Función para mostrar el texto desencriptado en la zona designada

function showDecryptText() {

  document.getElementById("rectangle-processed-text").textContent = decrypt();

}


//Función para alterar la visibilidad de los elementos en la zona designada

function showText() {
  // obtener el elemento "encrypt-decrypt-text"
  var element = document.getElementById("encrypt-decrypt-text");

  // siempre mostrar el elemento "encrypt-decrypt-text"
  element.style.visibility = "visible";
  
  // obtener el elemento "no-text"
  var noText = document.getElementById("no-text");

  // siempre ocultar el elemento "no-text"
  noText.style.visibility = "hidden";
}

//Funcionamiento del botón "copiar"

document.getElementById("copy-button").addEventListener("click", function() {
  let text = document.getElementById("rectangle-processed-text").innerText;
  navigator.clipboard.writeText(text).then(function() {
    var successMessage = document.getElementById("success-message");
    successMessage.style.display = "block";

    //Ocultar el mensaje de copiado después de 1.5 segundos
    setTimeout(function() {
      successMessage.style.display = "none";
    }, 1500);
  }, function(err) {
    console.error("Error al copiar el texto: ", err);
  });
});


