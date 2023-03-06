import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Contador App';
  numero: number = 10;
  numero2: number = 20;
  numero3: number = 10;
  base: number = 5;

  sumar() {
    this.numero += 1;
  }

  restar() {
    this.numero -= 1;
  }

  acumular(valor: number) {
    this.numero2 += valor;
  }
}
