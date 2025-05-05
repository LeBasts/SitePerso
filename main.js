window.addEventListener('resize', checkSize);
function checkSize(){
    if(document.documentElement.clientWidth>1072){
        document.querySelector("nav").style.display = "inline-block";
    } else {
        document.querySelector("nav").style.display = "none";
    }
}
checkSize();
function deroulerMenu(){
    let state = document.querySelector("nav").style.display;
    if(state === "none"){
        document.querySelector("nav").style.display = "inline-block";
    } else{
        document.querySelector("nav").style.display = "none";
    }
    console.log(window.innerWidth);
}
function invalidStyle(){
    let divForm = document.querySelector('form');
    let divLen = divForm.children.length;
    for(i=0;i<divLen-1;i++){
        let divChild = divForm.children[i];
        let input = divChild.querySelector('input');
        let p = divChild.querySelector('p')
        if(input){
            input = divChild.querySelector('input');
        } else {
            input = divChild.querySelector('textarea');
        }
        if (divChild.innerText.includes("Champ") || divChild.innerText.includes("Mail")){
            input.setAttribute("class","invalid");
            p.setAttribute("class","invalid");
        }
    }
}
invalidStyle();