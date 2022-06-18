import { createRequire } from "module";
const require = createRequire(import.meta.url);

let obj = require("./modulo1.cjs")
//console.log("valor: ",obj.nome);
//console.log("valor: ",obj.sobrenome);
//obj.nomeCompleto();

import { x } from "./modulo2.js"
//console.log(x);


function fazAlgo(texto,qtde) {
    for(let i=0; i<qtde; i++) {
        console.log("text:",texto);    
    }
}

let fazAlgo2 = function(texto,qtde) {
    for(let i=0; i<qtde; i++) {
        console.log("text:",texto);    
    }
}

let funcLegal = function(p1,p2) {
    console.log("eu sou uma funcao legal");
    console.log("p1: ",p1);
    console.log("p2: ",p2);
    p2("legal",3);
}

let funEmocao = (x,y) => { return x+y };

let ret = funEmocao(5,9);
console.log(ret);

//funcLegal(15,fazAlgo2);

// Passando como parâmetro uma função anônima
funcLegal("oi", (x,y) => {
    console.log("x",x);
    console.log("y",y);
});

//fazAlgo("oi gente",5);
//fazAlgo2("oi",5);

//let f1 = fazAlgo;
//f1("oi gente",5);
//fazAlgo("oi gente",5);