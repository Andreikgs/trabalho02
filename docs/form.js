document.addEventListener("DOMContentLoaded", function(){
    const formulario = document.getElementById("meuform");

    formulario.addEventListener("submit", function(event){
        event.preventDefault();

        const genero = document.querySelector('input[type="radio"]:checked');
        const idade = document.getElementById("idade").value;
        const remedio = document.getElementById("remedioS").checked;
        const exercicio = document.getElementById("exercicioS").checked;
        const alergia = document.getElementById("alergiaS").checked;
        const imagemContainer = document.getElementById("imagemContainer");
        const imagemContainerex = document.getElementById("imagemContainerex");
        const imagemContaineral = document.getElementById("imagemContaineral");

        if(genero.value === "Feminino"){
            document.body.style.backgroundColor = "pink";
        }else{
            if(genero.value === "Masculino"){
                document.body.style.backgroundColor = "blue";
            }else{
                document.body.style.backgroundColor = "black";
                document.body.style.color = "white";
            }
        }

        if (idade > 18) {
            document.body.style.color = "green";
        }else{
            document.body.style.color = "red";
        }

        imagemContainer.innerHTML = "";
        imagemContainerex.innerHTML = "";
        imagemContaineral.innerHTML = "";
        if (remedio) {
            const imagem = document.createElement("img");
            imagem.src = "imagens/remedio.png";
            imagem.alt = "Imagem relacionada ao remédio";
            //const imagemContainer = document.getElementById("imagemContainer");
            //imagemContainer.innerHTML = ""; // Limpar conteúdo anterior
            imagemContainer.appendChild(imagem);
        } else {
            imagemContainer.innerHTML = "";
        }
        if (exercicio) {
            const imagemex = document.createElement("img");
            imagemex.src = "imagens/forte.png";
            imagemex.alt = "Imagem relacionada ao exercicio";
            //const imagemContainerex = document.getElementById("imagemContainerex");
            //imagemContainerex.innerHTML = ""; // Limpar conteúdo anterior
            imagemContainerex.appendChild(imagemex);
        } else {
            imagemContainerex.innerHTML = "";
        }
        if (alergia) {
            const imagemal = document.createElement("img");
            imagemal.src = "imagens/alergia.png";
            imagemal.alt = "Imagem relacionada a alergia";
            //const imagemContainerex = document.getElementById("imagemContainerex");
            //imagemContainerex.innerHTML = ""; // Limpar conteúdo anterior
            imagemContaineral.appendChild(imagemal);
        } else {
            imagemContaineral.innerHTML = "";
        }
    })
})