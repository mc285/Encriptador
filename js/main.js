function encrypt(){
    let text = document.getElementById("encriptText");
    const rulesAlura = document.getElementById("rulesAlura");
    const rulesBase64 = document.getElementById("rulesBase64");

    if(rulesAlura.checked == true){
        if(text.value == ""){
            alert("Debes de poner un texto");
        }
        else{
            let encryptedWords = aluraEncrypt(text.value);
            let specialChar = /^[a-z0-9\s]*$/;
            if(!text.value.search(specialChar) && text.value.toUpperCase()){
                document.getElementById("encryptedText").value = encryptedWords;
                document.getElementById("result").innerHTML = "Texto encriptado:";
                text.value = "";
            }else{
                alert("No se permiten caracteres especiales ni mayusculas");
            };
            
        };
    };
    if(rulesBase64.checked == true){
        if(text.value == ""){
            alert("Debes de poner un texto");
        }
        else{
            let encryptedWords = btoa(text.value);
            let specialChar = /^[a-zA-Z0-9\s]*$/;
            if(!text.value.search(specialChar)){
                document.getElementById("encryptedText").value = encryptedWords;
                document.getElementById("result").innerHTML = "Texto encriptado:";
                text.value = "";
            }else{
                alert("No se permiten caracteres especiales.");
            };
            
        };
    };

};
function decrypt(){
    const rulesAlura = document.getElementById("rulesAlura");
    const rulesBase64 = document.getElementById("rulesBase64");
    let text = document.getElementById("encriptText");
    let textValue = document.getElementById("encryptedText");
    if(rulesAlura.checked == true){
        if(text.value == ""){
            alert("Debes de poner un texto");
        }else{
            textValue.value = aluraDecrypt(text.value);
            document.getElementById("result").innerHTML = "Texto desencriptado:";
            text.value = "";
        };
    };
    if(rulesBase64.checked == true){
        if(text.value == ""){
            alert("Debes de poner un texto");
        }else{
            textValue.value = atob(text.value);
            document.getElementById("result").innerHTML = "Texto desencriptado:";
            text.value = "";
        };
    };


};
function copyButton(){
    let text = document.getElementById("encryptedText");
    if(text.value == null || text.value == undefined || text.value == ""){
        return
    }else{
        navigator.clipboard.writeText(text.value);
        text.value = "";

    };
    
};
function aluraEncrypt(text){
   text = text.replace(/e/g, "enter");
   text = text.replace(/i/g, "imes");
   text = text.replace(/a/g, "ai");
   text = text.replace(/o/g, "ober");
   text = text.replace(/u/g, "ufat");
   return text
};
function aluraDecrypt(text){
    text = text.replace(/enter/g, "e");
    text = text.replace(/imes/g, "i");
    text = text.replace(/ai/g, "a");
    text = text.replace(/ober/g, "o");
    text = text.replace(/ufat/g, "u");
    return text
 };