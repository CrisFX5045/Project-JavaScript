function mobMenuShow(){
    let menu = document.body.getElementsByClassName('topNav')[0];
    menu.style.right = "0%";
}
AOS.init();
function mobMenuClose(){
    let menu = document.body.getElementsByClassName('topNav')[0];
    menu.style.right = "-60%";
}

function buscador(){
    document.getElementById("busca").value = "";
}
function openDescription(){
    let descrip = document.body.getElementsByClassName('description')[0]
    descrip.style.zIndex = "99";
    descrip.style.opacity = "100%";

    let closeBtn = document.body.
    getElementsByClassName('descripClose')[0]
    closeBtn.style.zIndex = "99";
    closeBtn.style.opacity = "100%";
}
function closeDescrip(){
    let descrip = document.body.getElementsByClassName('description')[0]
    descrip.style.zIndex = "0";
    descrip.style.opacity = "0%";
    let closeBtn = document.body.getElementsByClassName('descripClose')[0]
    closeBtn.style.zIndex = "0";
    closeBtn.style.opacity = "0%";
}