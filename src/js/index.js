/* import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { faCheck, faAngleLeft } from "@fortawesome/free-solid-svg-icons/";

import 'bootstrap/js/dist/collapse.js';
import 'bootstrap/js/dist/carousel.js';

library.add(faCheck);
library.add(faAngleLeft);
dom.watch(); */

import '../css/estilo.scss';

import '../imgs/coches/img2.png';
import '../imgs/img1.png';

// let lista=[...document.querySelectorAll("div[class|='panel']")];

let {log}=console;

// lista.forEach(item=>item.addEventListener("click",function(){


//     log(this);
// }));

// log(lista);

let padre=document.querySelector(".parent");

padre.addEventListener("click",function(e){
    log("Hola!!!",this,e.target);

    let hijos=[...this.children];

    log(hijos,Array.isArray(hijos));

    let este=hijos.indexOf(e.target);

    log(este)
    
});
let num=0;

let circulos = [...document.querySelectorAll("[class|='circulo']")];


circulos.forEach(item=>item.addEventListener("transitionend",(e)=>{
    // log(e.target,e.propertyName);


        e.target.classList.remove("este");

    // circulos[num].classList.remove("este");

})) 




log(circulos)

function prueba(num) {
    
    log(`Hola desde la funcion prueba ${num}  !!!!!!!!`);
    // circulos[num].classList.add("este");
    // log(num)
    circulos.forEach((item,ind)=>{
        setTimeout(function(){
            item.classList.add("este")
        },(500/3)*ind)
        // item.classList.add("")
    })
    setTimeout(prueba,1000)
    

}



// let _arrayT=[prueba1,prueba2,prueba3]


function llamada(callb) {
    let funcion=new Function(callb)
    log(funcion)
        funcion();
};



prueba();



// (`prueba${num}`).call(null)

// log(window)









