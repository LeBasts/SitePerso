window.addEventListener('resize', checkSize);
function checkSize(){
    if(document.documentElement.clientWidth>995){
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
    console.log(window.innerWidth)
    
}
// progressBar();
// function progressBar(){
//     console.log("lalala : "+document.getElementById("frontHtml").style.width)
//     let width =0;
//     while(width<=10){
//         clearInterval
//         console.log(width);
//         width+=1;

//     }
// }