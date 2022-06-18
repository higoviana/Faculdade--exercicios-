import { Component } from '@angular/core';

@Component({
    selector: "contador",
    templateUrl: './contador.component.html',
    styleUrls: ['./contador.component.css', './fonts.css']
})

export class ContadorComponent {
    valor = 0;

    incrementa() {
        console.log("incrementa");
        this.valor++;
    }

    decrementa() {
        console.log("decrementa");
        this.valor--;
    }

}

