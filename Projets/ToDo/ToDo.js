const main = document.querySelector('main');                    // Recupère le compartiment main
const placeDiv = main.children;
function newAction(){                                           // Fonction d'ajout de tache
    let compt = document.querySelectorAll("div.action").length; //Récupère le nombre de tache
    let nextAct = rename(compt+1);                                      // Défini la prochaine place libre
    let divTache = document.createElement('div');               //Crée une nouvelle div
    let brutTask = document.getElementsByTagName("input")[0].value; //Récupère la chaine dans l'imput
    let task = brutTask.replace(/[&<>"'\/]/g,'');
    if(task==''){                                               //Si vide
        document.getElementsByTagName("input")[0].value = "Vous devez écrire quelque chose";    // Message d'érreur
    } else {                                                    
        divTache.setAttribute('id','action'+nextAct);           //Ajoute l'id action prochaine place
        divTache.setAttribute('class','action');                //Ajoute la classe action
        //Ajoute l'interieur de la div
        divTache.innerHTML = '<p>'+task+'</p><input type="checkbox" class="ok" id="ok'+nextAct+'" onclick=check('+nextAct+')><button class="x" onclick=del('+nextAct+')>X</button>';
        //let previousTask = document.querySelector('main');      //
        main.appendChild(divTache, main.nextSibling);             // Crée la div dans main
        document.getElementsByTagName("input")[0].value="";       // Vide le champ input
        majCompt();                                               // Appel les fonctions
        rename();
        saveData();
    }
}
function del(numberTask){
    let divSuppr = document.getElementById('action'+numberTask);
    divSuppr.remove();
    majCompt();
    rename();
    saveData();
}
function ischeck(){
    console.log("Is check : ");
    for(i=0; i<placeDiv.length;i++){
        console.log("Boucle for : ");
        console.log(placeDiv[i].style.backgroundColor)
        if(placeDiv[i].style.backgroundColor == "green"){
            placeDiv[i].querySelector('input').checked = true;
        }
    }
}
function check(numberTask){
    let checkbox = document.getElementById('ok'+numberTask);
    checkbox.addEventListener('change', handleChange);
    function handleChange(e) {
        if (checkbox.checked){
            document.getElementById('action'+numberTask).style = "background-color : green;";
        } else if (!checkbox.checked){
            document.getElementById('action'+numberTask).style = "background-color : #434141;";
        }
        saveData();
    } 
}
function search(){
    if (event.key === 'Enter'){
        newAction();  
    }
}
function saveData(){
    localStorage.setItem("taches", main.innerHTML);
}
function showSaved(){
    rename();
    main.innerHTML = localStorage.getItem("taches");
}
function majCompt(){
    let nbTache = document.querySelectorAll("div.action").length;
    document.getElementById("compteur").innerHTML = "Taches en cours : "+nbTache;
}
function rename(){
    for(i=0; i<placeDiv.length;i++){
        placeDiv[i].id = 'action'+i;
        placeDiv[i].querySelector('input').id ='ok'+i;
        placeDiv[i].querySelector('input').setAttribute('onclick','onclick=check('+i+')');
        placeDiv[i].querySelector('button').setAttribute('onclick','onclick=del('+i+')');
    }
}
showSaved();
majCompt();
ischeck();