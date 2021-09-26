
// Saludo

const saludo = document.querySelector(".hi");


const saludar = () => {
        let now =  new Date().getHours()
        let name = "Teresa";

        if ((now > 6) && (now <= 12)) {
                saludo.textContent = `¡Buenos días, ${name}!`
        } else if ((now >= 13) && (now < 20)){
                saludo.textContent = `¡Buenas tardes, ${name}!`
        } else {
                saludo.textContent = `¡Buenas noches, ${name}!`
        }
}

saludar()
       
        

// Buscador de recetas

const inputRecipe = document.querySelector("#recipe");
const search = document.querySelector("#search__recipe");
const showRecipe = document.querySelector(".section__recipe")


search.addEventListener("click", (e) => {

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
                                                        elaboration.textContent = `${p}`
                                                        card.appendChild(elaboration)
                                                }


                                                fragment.appendChild(card)

                                        }
                                        
                                        else {
                                                console.log("no hay recetas relacionadas")
                                        }
                                        showRecipe.appendChild(fragment)
        
                                      
                                }
                        }
                      
                        
        

                })
                .catch(err => console.log(err))
} )
