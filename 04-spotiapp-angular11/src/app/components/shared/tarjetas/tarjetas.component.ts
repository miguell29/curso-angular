import { Component, Input} from '@angular/core';
import { Router } from '@angular/router';
import { ArtistaComponent } from '../../artista/artista.component';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css'],
})
export class TarjetasComponent{

  @Input() items : any[] = []
  constructor(private router:Router) { }

  IrAArtista( item : any){
    let idArtista;
    if(item.type === "artist"){
      idArtista = item.id;
      this.router.navigate(['/artista',idArtista]);
    }
    if(item.type === 'album'){

    }
  }

}
