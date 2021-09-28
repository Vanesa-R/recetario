const greeting=document.querySelector(".greeting"),greet=()=>{let e=(new Date).getHours();greeting.textContent=e>6&&e<=12?"¡Buenos días, Teresa!":e>=13&&e<20?"¡Buenas tardes, Teresa!":"¡Buenas noches, Teresa!"};greet();const inputRecipe=document.querySelector("#recipe"),btnSearch=document.querySelector("#search__recipe"),showRecipe=document.querySelector(".section__recipe"),card=document.querySelector(".card__recipe");inputRecipe.focus(),inputRecipe.addEventListener("input",(e=>{""===inputRecipe.value?disabledBtnSearch():enabledBtnSearch()}));const enabledBtnSearch=()=>{btnSearch.disabled=!1},disabledBtnSearch=()=>{btnSearch.disabled=!0,clean()};btnSearch.addEventListener("click",(e=>{printRecipe()})),inputRecipe.addEventListener("change",(e=>{printRecipe()}));const printRecipe=()=>{fetch("../dist/js/recipes.json").then((e=>e.ok?Promise.resolve(e):Promise.reject(error))).then((e=>e.json())).then((e=>{const t=document.createDocumentFragment();if(""===showRecipe.textContent)for(const n of e){if(n.title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes(inputRecipe.value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,""))){const e=document.createElement("div");e.classList.add("card__recipe");const i=document.createElement("h1");i.classList.add("title__recipe"),i.textContent=`${n.title}`,e.appendChild(i);const c=document.createElement("h2");c.classList.add("subtitle__recipe"),c.textContent="Ingredientes:",e.appendChild(c);const o=document.createElement("ul");o.classList.add("list__ingredients");for(let e of n.ingredients){const t=document.createElement("li");t.classList.add("list__item__ingredients"),t.textContent=`${e}`,o.appendChild(t)}e.appendChild(o);const r=document.createElement("h2");r.classList.add("subtitle__recipe"),r.textContent="Elaboración:",e.appendChild(r);const a=document.createElement("div");a.classList.add("elaboration__recipe");for(let e of n.elaboration){const t=document.createElement("p");t.classList.add("paragraph__elaboration"),t.textContent=`${e}`,a.appendChild(t)}e.appendChild(a),t.appendChild(e)}showRecipe.appendChild(t)}})).catch((e=>console.log(e)))};inputRecipe.addEventListener("input",(e=>{""===inputRecipe.value&&""!==showRecipe.textContent&&clean()}));const clean=()=>{showRecipe.textContent="",showRecipe.removeChild(card)},btnVoice=document.querySelector("#voice__search");let recognition=new webkitSpeechRecognition;recognition.lang="es-ES",recognition.continuous=!1,recognition.interimResults=!0,recognition.onresult=e=>{let t=e.results;inputRecipe.value=t[t.length-1][0].transcript,printRecipe(),"borrar"===inputRecipe.value&&clean()},btnVoice.addEventListener("click",(e=>{recognition.start()})),window.hasOwnProperty("SpeechRecognition")||window.hasOwnProperty("webkitSpeechRecognition")||console.log("La API Speech Recognition no está disponible");