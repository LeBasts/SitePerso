const main = document.querySelector('main');
const tasks = document.getElementById('tasks');                    // Recupère le compartiment tasks
const done = document.getElementById('done');                    // Recupère le compartiment done
const placeDiv = tasks.children;
function newAction(){                                        // Fonction d'ajout de tache
    let compt = document.querySelectorAll("div.action").length; //Récupère le nombre de tache
    let nextAct = compt;                              // Défini la prochaine place libre
    let divTache = document.createElement('div');               //Crée une nouvelle div
    let brutTask = document.getElementsByTagName("input")[0].value; //Récupère la chaine dans l'imput
    let task = brutTask.replace(/[&<>"'\/]/g,'');
    if(task==''){                                            //Si vide
        document.getElementsByTagName("input")[0].value = "Vous devez écrire quelque chose";    // Message d'érreur
    } else {  
        while(verifId(nextAct) == false){
            console.log(verifId(nextAct));
            nextAct = nextAct+1;
            verifId(nextAct);   
        }
        divTache.setAttribute('id','action'+nextAct);           //Ajoute l'id action prochaine place
        divTache.setAttribute('class','action');                //Ajoute la classe action
        //Ajoute l'interieur de la div
        divTache.innerHTML = '<p>'+task+'</p><input type="checkbox" class="ok" id="ok'+nextAct+'" onclick=check('+nextAct+',action'+nextAct+')><button class="x" onclick=del('+nextAct+')>X</button>';
        //let previousTask = document.querySelector('tasks');      //
        tasks.appendChild(divTache, tasks.nextSibling);             // Crée la div dans tasks
        document.getElementsByTagName("input")[0].value="";       // Vide le champ input
        majCompt();                                               // Appel les fonctions
        saveData();
    }
}
function del(numberTask){
    let divSuppr = document.getElementById('action'+numberTask);
    divSuppr.remove();
    majCompt();
    saveData();
}
function ischeck(){
    for(i=0; i<done.children.length;i++){
        if(done.children[i].style.backgroundColor == "green"){
            done.children[i].querySelector('input').checked = true;
        }
    }
}
function check(numberTask){
    // let checkbox = document.querySelector("main div input");
    let checkbox = document.getElementById("ok"+numberTask);
    
    // let checkbox1 = document.querySelector('main div #action'+numberTask+" input");
    // let checkbox2 = document.querySelector('main div #done'+numberTask+" input");
    checkbox.addEventListener('change', handleChange);
    function handleChange(e) {  
        if (checkbox.checked){
            document.getElementById('action'+numberTask).style = "background-color : green;";    
            done.appendChild(document.getElementById('action'+numberTask), done);
        } else if (!checkbox.checked){
            document.getElementById('action'+numberTask).style = "background-color : #434141;";
            tasks.appendChild(document.getElementById('action'+numberTask), tasks);
        }
        majCompt();
        saveData();
    } 
}
function search(){
    if (event.key === 'Enter'){
        newAction();  
    }
}
function saveData(){
    localStorage.setItem("taches", tasks.innerHTML);
    localStorage.setItem("done", done.innerHTML);
}
function showSaved(){
    done.innerHTML = localStorage.getItem("done");
    tasks.innerHTML = localStorage.getItem("taches");
}
function majCompt(){
    document.getElementById("taskButton").innerHTML = "En cours - "+tasks.children.length;
    if(done.children.length == 1){
        document.getElementById("doneButton").innerHTML = "Terminée - "+done.children.length;
    } else {
        document.getElementById("doneButton").innerHTML = "Terminées - "+done.children.length;
    }
}
// function rename(div,newId){
    //     div = div.children;
    //     for(i=0; i<div.length;i++){
        //         div[i].id = newId+i;
        //         div[i].querySelector('input').id ='ok'+i;
        //         div[i].querySelector('input').setAttribute('onclick','onclick=check('+i+')');
        //         div[i].querySelector('button').setAttribute('onclick','onclick=del('+i+')');
        //     }
        // }
        function selectTab(onglet){
            let content = document.querySelectorAll('.tasks');
            for(i=0;i<content.length;i++){
                content[i].style.display = 'none';
            }
            content[onglet].style.display = 'block';
        }
        function verifId(compt){
            let idValid;
            tasksLen = tasks.children;
            doneLen = done.children;
            compt = 'action'+compt;
            for(i=0;i<tasksLen.length;i++){
                if(compt==tasksLen[i].id){
                    idValid = false;
                } else if(idValid!=false){
                    idValid = true;
                }
            }
            for(i=0;i<doneLen.length;i++){
                if(compt==doneLen[i].id){
                    idValid = false;
                } else if(idValid!=false){
                    idValid = true;
                }
            }
            //console.log(idValid);
            return(idValid);
        }
        function deleteSave(){
            localStorage.clear();
        }
        showSaved();
        selectTab(0);
        majCompt();
        ischeck();