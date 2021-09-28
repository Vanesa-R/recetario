/**************************
     BUSCADOR por voz
***************************/

//  Variables DOM
const btnVoice = document.querySelector("#voice__search");


let recognition = new webkitSpeechRecognition();

// Propiedades
recognition.lang = 'es-ES';
recognition.continuous = false;
recognition.interimResults = true;

recognition.onresult = (event) => {
        
        let results = event.results;
       inputRecipe.value = results[results.length -1][0].transcript;

       printRecipe()

          
}


btnVoice.addEventListener("click", (e) => {
        recognition.start()
})



              
if (!(window.hasOwnProperty("SpeechRecognition") || window.hasOwnProperty("webkitSpeechRecognition"))) {
        console.log("La API Speech Recognition no está disponible")
}