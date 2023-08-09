function saludar()
{
    alert("Hola!");
};

const divSaludo = document.querySelector("div")
divSaludo.addEventListener("click",()=>
    {
        alert("Hola! Soy el div");
    }
);