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
       
        

/**************************
     BUSCADOR DE RECETAS
***************************/

//  Variables DOM
const inputRecipe = document.querySelector("#recipe");
const btnSearch = document.querySelector("#search__recipe");
const showRecipe = document.querySelector(".section__recipe")


// Evento de escucha sobre el buscador

btnSearch.addEventListener("click", (e) => {

        fetch("recipe.json")
                .then(res => res.ok ? Promise.resolve(res) : Promise.reject(error))
                .then(res => res.json())
                .then(data => {
                        
                        const fragment = document.createDocumentFragment();

                        if (showRecipe.textContent === "") {

                                for (const key of data){

                                        if (key.title.toLowerCase().includes(inputRecipe.value.toLowerCase())){         
                                                
                                                // Card de la receta
                                                const card = document.createElement("div");
                                                card.classList.add("card__recipe");


                                                // Título
                                                const title = document.createElement("h1");
                                                title.classList.add("title__recipe");
                                                title.textContent = `${key.title}`
                                                card.appendChild(title);


                                                // Ingredientes
                                                const subtitleIngredients = document.createElement("h2");
                                                subtitleIngredients.classList.add("subtitle");
                                                subtitleIngredients.textContent = "Ingredientes:"
                                                card.appendChild(subtitleIngredients);

                                                const listIngredients = document.createElement("ul");
                                                listIngredients.classList.add("list__ingredients");
                                                
                                                for (let i of key.ingredients){
                                                        const itemIngredients = document.createElement("li");
                                                        itemIngredients.classList.add("list__item__ingredients");
                                                        itemIngredients.textContent = `${i}`
                                                        listIngredients.appendChild(itemIngredients)
                                                }
                                                card.appendChild(listIngredients)


                                                // Elaboración

                                                const subtitleElaboration = document.createElement("h2");
                                                subtitleElaboration.classList.add("subtitle");
                                                subtitleElaboration.textContent = "Elaboración:"
                                                card.appendChild(subtitleElaboration);
        
                                                for (let p of key.elaboration){
                                                        const elaboration = document.createElement("p");
                                                        elaboration.classList.add("paragraph__elaboration");
                                                        elaboration.textContent = `${p}`
                                                        card.appendChild(elaboration)
                                                }

                                                fragment.appendChild(card)

                                        }
                                
                                        showRecipe.appendChild(fragment)
                
                                }
                        }

                        
                })
                .catch(err => console.log(err))
      
})