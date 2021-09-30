const btnSpeaker = document.querySelector("#speaker");



btnSpeaker.addEventListener("click", (e) => {
       console.log(e)
       synth(showRecipe.textContent)
        
})

/* Reproducción por voz */

const synth = (text) => {

        const utterance = new SpeechSynthesisUtterance(text)
        utterance.rate = 0.6;
        utterance.volumen = 1;
        utterance.pitch = 1;
        utterance.lang = "es-ES"

        speechSynthesis.speak(utterance)

}

