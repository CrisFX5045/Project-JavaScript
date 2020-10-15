function mobMenuShow(){
    let menu = document.body.getElementsByClassName('topNav')[0];
    menu.style.right = "0%";
}

AOS.init();

function mobMenuClose(){
    let menu = document.body.getElementsByClassName('topNav')[0];
    menu.style.right = "-50%";
}


function buscador(){
    document.getElementById("busca").value = "";
}
