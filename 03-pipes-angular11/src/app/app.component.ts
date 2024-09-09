import { Component } from '@angular/core';
import { promise } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  public nombre = 'Miguel';
  numeros = [1,2,3,4,5,6,7,8,9];
  PI = Math.PI;
  porcentaje = 0.457;
  salario = 875455.45;
  heroe = {
    nombre: 'logan',
    alias: 'wolverine',
    edad: 115,
    direccion:{
      calle:"desconocida",
      casa:'mansion X'
    }
  }
  activar = true

  promesa = new Promise<string>(resolve => {
    setTimeout(() => {
      resolve('promesa completada');
    }, 3000);
  });

  ActivarHandle()
  {
    this.activar = !this.activar;
  }
}
