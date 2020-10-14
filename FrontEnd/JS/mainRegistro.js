
function checkForm() {

    let hasErrors;




    let email = document.getElementById('email');
    if (!validator.isEmail(email.value)) {
        console.log("not an email");
        email.classList.add("error");
        let msg = document.createElement("span");
        msg.innerHTML = "Email Valido es Requerido";
        showErrorMsg(email, msg);
        hasErrors = true;
    }

    

    let name = document.getElementById('password');
    if (validator.isEmpty(name.value)) {
        name.classList.add("error");
        let msg = document.createElement("span");
        msg.innerHTML = "Contraseña Requerida";
        showErrorMsg(name, msg);
        hasErrors = true;
    }
    let comment = document.getElementById('name');
    if (validator.isEmpty(comment.value)) {
        comment.classList.add("error");
        let msg = document.createElement("span");
        msg.innerHTML = "Nombre Requerido";
        showErrorMsg(comment, msg);
        hasErrors = true;
    }


    if (hasErrors) {
        return false;
    } else { return true; }



};
AOS.init();


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


