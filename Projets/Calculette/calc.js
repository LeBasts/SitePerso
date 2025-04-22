let formuleAffichage=""; // formule à afficher string
let formuleCalc; // formule réelle
let resultat; // résultat
let formuleVide=true; // état de l'affichage

function main(buttonValue){
   affichageFormule(buttonValue);
}
function affichageFormule(buttonValue){ //récupère la valeur du boutton enfoncé
    const zoneFormule = document.getElementById("formule"); // recupère l'emplacement de la zone de formule
    const zoneResultat = document.getElementById("resultat"); // recupère l'emplacement de la zone de resultat
    let calculate = true; //Boolean qui autorise ou non a calculer
        switch(buttonValue){    //évalue l'expression buttonValue
            case "ac":              
                formuleAffichage = ""; //partie formule
                resultat = "";          //partie résultat
                break;
            case "del":
                formLength = formuleAffichage.length;   //enregistre la longueur de la chaine formule affichage
                let lastStrOp = formuleAffichage.toString().substring(formLength-2,formLength-1); // enregistre l'avant-dernier caractère de la formule
                if(lastStrOp=='-'||lastStrOp=='/'||lastStrOp=='*'||lastStrOp=='+'){ //controle si l'avant dernier est un oppérateur
                    calculate=false;    // refuse le calcul
                    formuleCalc=formuleAffichage.toString().substring(0,formLength-2);// enregistre la formule restante sans l'opérateur
                } else // sinon
                {
                    formuleCalc=formuleAffichage.toString().substring(0,formLength-1);// enregistre la formule restante
                }
                resultat = eval(formuleCalc);   // transforme la chaine en opération;
                formuleAffichage = formuleAffichage.toString().substring(0,formLength-1); //efface le dernier caractère
                break;
            case ".":
                if(formuleAffichage==""){                  //Si affichage vide
                    formuleAffichage=0+formuleAffichage;     //ajoute 0 devant un point
                }
            case "*":
            case "/": 
                if (formuleAffichage==""){       //si formule vide
                    calculate=false;             //refuse le calcul
                    resultat="Entrée invalide";  //Enregistre un message d'érreur dans résultat
                }
            case "-":
            case "+":
                formLength = formuleAffichage.length;    //enregistre la longueur de la chaine formule affichage
                let lastStr = formuleAffichage.toString().substring(formLength-1,formLength);   // enregistre le dernier caractère
                if(calculate==true){    //Si calcul autorisé
                    if(lastStr=='-'||lastStr=='/'||lastStr=='*'||lastStr=='+'||lastStr=='.'){ //Si dernier caractère est / * - + 
                       resultat="Entrée invalide";     //Enregistre un message d'érreur dans résultat
                    } else{ //Sinon
                        //let operateur = buttonValue;    //enregistre l'entrée dans operateur
                        formuleAffichage = formuleAffichage+buttonValue; //ajoute l'opérateur a la formule
                    }
                }
                break;
            default:
                if (calculate){     //si calcul autorisé
                    formuleAffichage = formuleAffichage+buttonValue; //enregistre la formule existante + l'entrée
                    resultat = eval(formuleAffichage);// resultat+buttonValue;
                }
            }
        // }
        if (resultat==undefined){ // si resultat n'est pas défini
            resultat = ""         // enregistre une chaine vide dans resultat
        }
        zoneFormule.innerHTML = formuleAffichage; // Remplace le texte de la zone de formule par la touche appuyée
        zoneResultat.innerHTML = resultat; // Remplace le texte de la zone de formule par la touche appuyée 
}
function checkChar(formule,position){
    let formuleLength = formule.length
    let lastStrOp = formule.toString().substring(formuleLength-position,formuleLength-(position+1));
    return lastStrOp;
}
// function affichageFormuleV1(buttonValue){ //récupère la valeur du boutton enfoncé
//     const zoneFormule = document.getElementById("formule"); // recupère l'emplacement de la zone de formule
//     const zoneResultat = document.getElementById("resultat"); // recupère l'emplacement de la zone de resultat
//     if (buttonValue == "ac"){ // Si AC est préssée on remet la zone d'affichage a zero
//         formuleAffichage = ""; //partie formule
//         resultat = "";          //partie résultat
//     } else if (buttonValue == "del"){ //Si la touche del est préssée
//         formLength = formuleAffichage.length;   
//         formuleAffichage = formuleAffichage.toString().substring(0,formLength-1);
//         // let lastStr = formuleAffichage.toString().substring(formLength-1,formLength);
//         // if(lastStr!='-'||lastStr!='/'||lastStr!='*'||lastStr!='+'){
//         //      resultat = eval(formuleAffichage);// resultat+buttonValue;
//         // }
//     } else if (buttonValue=='-'||buttonValue=='+'||buttonValue=='/'||buttonValue=='*'){
//         formLength = formuleAffichage.length;
//         let lastStr = formuleAffichage.toString().substring(formLength-1,formLength);
//         if(lastStr=='-'||lastStr=='/'||lastStr=='*'||lastStr=='+'){
//             console.log("C'est mort !")
//         } else{
//             let operateur = buttonValue;
//             formuleAffichage = formuleAffichage+operateur
//         }
//     } else if(formuleAffichage == undefined || formuleAffichage == 0){
//         resultat = buttonValue;
//         formuleAffichage = buttonValue;
//     } else {
//         formuleAffichage = formuleAffichage+""+buttonValue;
//         resultat = eval(formuleAffichage)// resultat+buttonValue;
//     }
//     zoneFormule.innerHTML = formuleAffichage; // Remplace le texte de la zone de formule par la touche appuyée
//     zoneResultat.innerHTML = resultat; // Remplace le texte de la zone de formule par la touche appuyée 
// }

// function affichageFormuleV2(buttonValue){ //récupère la valeur du boutton enfoncé
//     const zoneFormule = document.getElementById("formule"); // recupère l'emplacement de la zone de formule
//     const zoneResultat = document.getElementById("resultat"); // recupère l'emplacement de la zone de resultat
//     let calculate = true;
//     if(formuleAffichage == undefined){
//         if(buttonValue=='del'||buttonValue=='ac'||buttonValue=='*'||buttonValue=='/')
//         {
//             formuleAffichage = "Entrez d'abord un chiffre";
//         } else
//         {
//             resultat = buttonValue;
//             formuleAffichage = buttonValue;
//         }
//     } else {
//         switch(buttonValue){
//             case "ac":
//                 formuleAffichage = ""; //partie formule
//                 resultat = "";          //partie résultat
//                 break;
//             case "del":
//                 formLength = formuleAffichage.length;   
//                 let lastStrOp = formuleAffichage.toString().substring(formLength-2,formLength-1);
//                 if(lastStrOp=='-'||lastStrOp=='/'||lastStrOp=='*'||lastStrOp=='+'){
//                     calculate=false;
//                     formuleCalc=formuleAffichage.toString().substring(0,formLength-2);// resultat+buttonValue;
//                 } else
//                 {
//                     formuleCalc=formuleAffichage.toString().substring(0,formLength-1);
//                 }
//                 resultat = eval(formuleCalc);// resultat+buttonValue;
//                 formuleAffichage = formuleAffichage.toString().substring(0,formLength-1);
//                 break;
//             case "*":
//             case "/":
//             case "-":
//             case "+":
//                 formLength = formuleAffichage.length;
//                 let lastStr = formuleAffichage.toString().substring(formLength-1,formLength);
//                 if(lastStr=='-'||lastStr=='/'||lastStr=='*'||lastStr=='+'){
//                     formuleAffichage="";
//                     resultat="Impossible d'ajouter ce genre d'opérateur";
//                 } else{
//                     let operateur = buttonValue;
//                     formuleAffichage = formuleAffichage+operateur;
//                 }
//                 break;
//             default:
//                 if (calculate){
//                     formuleAffichage = formuleAffichage+""+buttonValue;
//                     resultat = eval(formuleAffichage);// resultat+buttonValue;
//                 }
//             }
//         }
//         if (resultat==undefined){
//             resultat = ""
//         }
//         zoneFormule.innerHTML = formuleAffichage; // Remplace le texte de la zone de formule par la touche appuyée
//         zoneResultat.innerHTML = resultat; // Remplace le texte de la zone de formule par la touche appuyée 
// }

function affichageFormuleV3(buttonValue){ //récupère la valeur du boutton enfoncé
    const zoneFormule = document.getElementById("formule"); // recupère l'emplacement de la zone de formule
    const zoneResultat = document.getElementById("resultat"); // recupère l'emplacement de la zone de resultat
    let calculate = true; //Boolean qui autorise ou non a calculer
        switch(buttonValue){    //évalue l'expression buttonValue
            case "ac":              
                formuleAffichage = ""; //partie formule
                resultat = "";          //partie résultat
                break;
            case "del":
                formLength = formuleAffichage.length;   //enregistre la longueur de la chaine formule affichage
                let lastStrOp = formuleAffichage.toString().substring(formLength-2,formLength-1); // enregistre l'avant-dernier caractère de la formule
                if(lastStrOp=='-'||lastStrOp=='/'||lastStrOp=='*'||lastStrOp=='+'){ //controle si l'avant dernier est un oppérateur
                    calculate=false;    // refuse le calcul
                    formuleCalc=formuleAffichage.toString().substring(0,formLength-2);// enregistre la formule restante sans l'opérateur
                } else // sinon
                {
                    formuleCalc=formuleAffichage.toString().substring(0,formLength-1);// enregistre la formule restante
                }
                resultat = eval(formuleCalc);   // transforme la chaine en opération;
                formuleAffichage = formuleAffichage.toString().substring(0,formLength-1); //efface le dernier caractère
                break;
            case ".":
                if(formuleAffichage==""){                  //Si affichage vide
                    formuleAffichage=0+formuleAffichage;     //ajoute 0 devant un point
                }
            case "*":
            case "/": 
                if (formuleAffichage==""){       //si formule vide
                    calculate=false;             //refuse le calcul
                    resultat="Entrée invalide";  //Enregistre un message d'érreur dans résultat
                }
                
            case "-":
            case "+":
                formLength = formuleAffichage.length;    //enregistre la longueur de la chaine formule affichage
                let lastStr = formuleAffichage.toString().substring(formLength-1,formLength);   // enregistre le dernier caractère
                if(calculate==true){    //Si calcul autorisé
                    if(lastStr=='-'||lastStr=='/'||lastStr=='*'||lastStr=='+'||lastStr=='.'){ //Si dernier caractère est / * - + 
                       resultat="Entrée invalide";     //Enregistre un message d'érreur dans résultat
                    } else{ //Sinon
                        //let operateur = buttonValue;    //enregistre l'entrée dans operateur
                        formuleAffichage = formuleAffichage+buttonValue; //ajoute l'opérateur a la formule
                    }
                }
                break;
            default:
                if (calculate){     //si calcul autorisé
                    formuleAffichage = formuleAffichage+buttonValue; //enregistre la formule existante + l'entrée
                    resultat = eval(formuleAffichage);// resultat+buttonValue;
                }
            }
        // }
        if (resultat==undefined){ // si resultat n'est pas défini
            resultat = ""         // enregistre une chaine vide dans resultat
        }
        zoneFormule.innerHTML = formuleAffichage; // Remplace le texte de la zone de formule par la touche appuyée
        zoneResultat.innerHTML = resultat; // Remplace le texte de la zone de formule par la touche appuyée 
}
