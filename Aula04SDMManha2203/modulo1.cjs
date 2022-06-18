module.exports = {
    nome: "Ana",
    sobrenome: "Silva",
    idade: 25,
    amigos: [ "Paulo", "Bia", "Marcos" ],
    nomeCompleto: function() {
        console.log("nome completo: ",this.nome+" "+this.sobrenome);
    }
};                                          