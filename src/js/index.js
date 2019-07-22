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
    
})









