if (window.hasOwnProperty("SpeechRecognition") || window.hasOwnProperty("webkitSpeechRecognition")) {
      
        // Si la API está disponible creamos el objeto
        const recognition = new webkitSpeechRecognition();

        // Propiedades
        recognition.lang = 'es-ES';
        recognition.interimResults = true;
        recognition.continuous = false;
        
              
} else {
          console.log("La API Speech Recognition no está disponible")
}