import { Component } from '@angular/core';

@Component({
    selector: "user",
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.css', './fonts.css']
})

export class UserComponent {
    urlImagem = " ";
    nome = "";
    subTitulo = "";
    texto = "";

    pegarDados() {
        let self = this;
        console.log("pegarDados");

        fetch("https://randomuser.me/api/")
            .then(function (data) {
                data.json().then((obj) => {
                    console.log("obj", obj);
                    self.urlImagem = obj.results[0].picture.thumbnail;
                    self.nome = obj.results[0].name.first + " " + obj.results[0].name.first;
                    self.subTitulo = obj.results[0].email;
                })
            })
            .catch(function (error) {

            });

    }
}

