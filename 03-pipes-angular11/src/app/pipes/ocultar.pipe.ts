import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ocultar'
})
export class OcultarPipe implements PipeTransform {

  transform(value: string, estado:boolean): string {
    let resultado = '';
    if (estado) {
      for (let i = 0; i < value.length; i++) {
        resultado+= '*';
      }
    }
    else{
      resultado = value;
    }
    return resultado;
  }

}
