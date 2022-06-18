let posicao = {
    x: 50,
    y: 30
}

let objPessoa = {
    nome: "Ana",
    sobrenome: 'Silva',
    idade: 20,
    temGuardaChuva: true,
    altura: 1.72,
    bandasPreferidas: [ "ACDC", "QUEEN", "IRON" ],
    endereco: {
        logradouro: "Rua Alface",
        numero: 1234,
        bairro: "Jardim das Verduras"
    },
    nomeCompleto: function() {
        return this.nome+" "+this.sobrenome;
    },
    setNome: function(valor) {
        this.nome = valor;
    }
}

console.log(objPessoa);

let ret = objPessoa.nomeCompleto();
console.log(ret);

objPessoa.setNome("bia");
console.log(objPessoa);

let vetor = [ "ACDC", "QUEEN", "IRON" ];
console.log(vetor[2]);

console.log(objPessoa.bandasPreferidas[0]);

let frutas = [
    { nome: 'banana', cor: 'amarela' },
    { nome: 'maçã', cor: 'vermelha' },
    { nome: 'pera', cor: 'verde' },
];

console.log(frutas[1].nome);
console.log(frutas[1].cor);