
function encrypt(){
    let text = document.getElementById("encriptText");
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
function decrypt(){
    let text = document.getElementById("encriptText");
    let textValue = document.getElementById("encryptedText");
    if(text.value == ""){
        alert("Debes de poner un texto");
    }else{
        textValue.value = atob(text.value);
        document.getElementById("result").innerHTML = "Texto desencriptado:";
        text.value = "";
    };

};
function copyButton(){
    let text = document.getElementById("encryptedText").value;
    if(text == null || text == undefined || text == ""){
        return
    }else{
        navigator.clipboard.writeText(text);
    };
    
};