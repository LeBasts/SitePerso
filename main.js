window.addEventListener('resize', checkSize);
function checkSize(){
    if(document.documentElement.clientWidth>1072){
        document.querySelector("nav").style.display = "inline-block";
    } else {
        document.querySelector("nav").style.display = "none";
    }
}
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
const techList = document.getElementById('tech');
let techValue = techList.value;
const divTechChild = document.querySelector('.grid-projet').children;
console.log(divTechChild.length);

techList.addEventListener('change',showTechno);

function showTechno(){
    techValue = techList.value;
    if(techValue != 'all'){
        let attrib = divTechChild[1].getAttribute('class');
        console.log(attrib);
        for(i=0;i<divTechChild.length;i++){
            divTechChild[i].style.display = 'none';
            
            if(divTechChild[i].classList.contains(techValue)){
                console.log("ninja : "+techValue);
                divTechChild[i].style.display = 'flex';
            }
        }
    } else {
        for(i=0;i<divTechChild.length;i++){
            divTechChild[i].style.display = 'flex';
        }
    }
}
showTechno();
checkSize();
invalidStyle();