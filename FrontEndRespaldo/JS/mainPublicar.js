
function checkForm() {

    let hasErrors;

    let titulo = document.getElementById('titulo');
    if (validator.isEmpty(titulo.value)) {
        titulo.classList.add("error");
        let msg = document.createElement("span");
        msg.innerHTML = "Titulo Requerido";
        msg.style.backgroundColor = "#FFFFFF";
        showErrorMsg(titulo, msg);
        hasErrors = true;
    }
 
    let descripcion = document.getElementById('descripcion');
    if (validator.isEmpty(descripcion.value)) {
        descripcion.classList.add("error");
        let msg = document.createElement("span");
        msg.innerHTML = "Descripcion Requerida";
        msg.style.backgroundColor = "#FFFFFF";
        showErrorMsg(descripcion, msg);
        hasErrors = true;
    }
 
    let categoria = document.getElementById('categoria');
    if (validator.isEmpty(categoria.value)) {
        categoria.classList.add("error");
        let msg = document.createElement("span");
        msg.innerHTML = "Categoria Requerida";
        msg.style.backgroundColor = "#FFFFFF";
        showErrorMsg(categoria, msg);
        hasErrors = true;
    }


    if (hasErrors) {
        return false;
    } else { return true; }



};



function showErrorMsg(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    hideError(referenceNode);
}

function hideError(el) {
    el.addEventListener("blur", (event) => {
        el.classList.remove("error");
        if (el.nextElementSibling !== null) {
            el.nextElementSibling.remove();
        }
    });

    
}