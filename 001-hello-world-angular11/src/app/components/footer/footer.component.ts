import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent{

  nombre = 'Miguel'
  apellido = 'Juárez'
  anio: number
  constructor() {
    this.anio = new Date().getFullYear();
   }
}
