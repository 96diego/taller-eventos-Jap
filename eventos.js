let noSaludo=true;
function saludar()
{
    alert("Hola!");
    noSaludo=false;
};

const divSaludo = document.querySelector("div")
divSaludo.addEventListener("click",()=>
    {
        if(noSaludo)
        {
        alert("Hola! Soy el div");
        noSaludo=false;
        };
    }
);
noSaludo=true;