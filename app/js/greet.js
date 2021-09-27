/*************
     SALUDAR
*************/

// Variables DOM
const greeting = document.querySelector(".greeting");

// Función 
const greet = () => {
        let now =  new Date().getHours()
        let name = "Teresa";

        if ((now > 6) && (now <= 12)) {
                greeting.textContent = `¡Buenos días, ${name}!`
        } else if ((now >= 13) && (now < 20)){
                greeting.textContent = `¡Buenas tardes, ${name}!`
        } else {
                greeting.textContent = `¡Buenas noches, ${name}!`
        }
}
greet()