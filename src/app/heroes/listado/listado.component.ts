import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America'];
  heroesBorrados: string[] = [];
  //heroeb: string = '';

  borrarHeroe():void {
    const heroeb = this.heroes.shift() || '';
    this.heroesBorrados.unshift(heroeb);
  }
}
