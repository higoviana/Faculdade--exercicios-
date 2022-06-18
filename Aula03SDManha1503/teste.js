
let objPessoa = {
    nome: "Ana",
    sobrenome: "Silva",
    idade: 20,
    temGuardaChuva: true,
    endereco: {
        logradouro: "Rua Alface",
        numero: 1234,
        bairro: "Jardim das Verduras"
    }   
}

console.log(objPessoa);

function fazAlgo(valor, msg) {
    console.log(msg+" fiz algo "+valor);
    console.log(msg+" fiz algo "+(valor+1));
    return valor+msg;
}

let ret = fazAlgo(2,"oi");
console.log(ret);

ret = fazAlgo(10,"olá");
console.log(ret);

ret = fazAlgo(100,"Tudo bem?");
console.log(ret);
