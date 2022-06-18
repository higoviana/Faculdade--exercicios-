import { Component } from '@angular/core';

@Component({
    selector: "oi-gente",
    template: `
        <p>Oi gente</p>
        <p>Framework {{framework}} </p>
        <p>Um Nome {{nome}} </p>
    `
})

export class OiGenteComponent {
    framework = "Angular";
    nome = "Ana";
}