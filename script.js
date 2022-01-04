/* Ex1:
- Il y plusieurs images dans un dossier.
- Dans HTML, on a une div qui affiche une seule image.
- On a deux boutons - Un écrit "image suivant".
                    - Un écrit "image précedent".

Ex2:
- Faire un texte, à la fin du texte, il y a un bouton "En savoir plus".
- Quand on click, ça apparait l'autre texte.
*/

/*
//Ex 1:

var slide = ["./image/banana.jpg", "./image/kiwi.jpg", "./image/orange.jpg", "./image/pomme.jpg"];
var tab = 0;

function changeImage(){
    tab++;
    console.log(slide[tab]);
    var fruits = document.getElementById("banana");
    fruits.setAttribute("src", slide [tab]);
}
function changeImage2(){
    tab--;
    console.log(slide[tab]);
    var fruits = document.getElementById("banana");
    fruits.setAttribute("src", slide [tab]);
}
*/
//Corrigé:

/*var images =["./image/banana.jpg", "./image/kiwi.jpg", "./image/orange.jpg", "./image/pomme.jpg"];

var potion = 0;
function next(){
    potion = potion +1
    if(potion >= images.length){
        potion = 0;
    }
    document.getElementById("image").src = images[potion];

}

function prec(){
    potion = potion -1
    if(potion <= 0){
        potion = 3;
    }
    document.getElementById("image").src = images[potion];

}

*/

//Ex 2:

/*


function texte(){
    var text1 = document.getElementById("texte1");
    text1.style.display = "block";
}
function cache(){
    var hiden = document.getElementById("texte1");
    hiden.style.display ="none";
}

*/

//Corrigé:

 /*   
function texte(){
    var monElem = document.getElementById("suite");
    //si le texte est caché 
    if(monElem.style.display == "none"){
        //alors je le montre
        monElem.style.display = "inline";
    }else{
    //sinon 
    
        //je le cache
        monElem.style.display = "none";
    }
    }
*/



// EX3: Crée un bouton qui fais apparaître 7 div de couleurs bleu sauf la quatrième qui doit être jaune.

 /*  
function divAparaitre(){
    
    var div = document.getElementById("div1");

    if (div.style.display == "none"){
        div.style.display = "inline";
    }else{
        div.style.display = "none";
    }
}
*/

/* 
function divAparaitre(){
var div = document.createElement ("div");
div.style.backgroundColor = "blue";

document.getElementById("div").appendChild(div);

}

*/


/*
function divAparaitre(){

    var div = document.createElement("div");
    div.style.backgroundColor = "blue";
    div.style.width = "200px";
    div.style.height = "200px";
    */


  /*  console.log(div);

    var bouton = document.getElementById("div1");

    console.log(bouton);

    bouton.appendChild(div);*/

    /*
    var element = [];
    var i = 0;

    while ( i<= 6){
        var div = document.createElement("div");
        div.style.backgroundColor = "blue";
        div.style.width = "200px";
        div.style.height = "200px";

        console.log(element[i]);

        i++;
        
        console.log(i);
        if (i == 3){
            div.style.backgroundColor = "yellow";
        }

        document.body.appendChild(div);
    }



}

*/



/* TESTER ANIMATION */



