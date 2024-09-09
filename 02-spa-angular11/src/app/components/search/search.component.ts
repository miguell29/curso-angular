import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe, HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  heroes: Heroe[];
  palabra:string;
  constructor(private _activatedRouted: ActivatedRoute,
              private _heroesService: HeroesService
  )
  {
    this._activatedRouted.params.subscribe( params => {
      this.palabra = params['keyword'];
      this.heroes = _heroesService.GetHeroByKeyWord(this.palabra);
    });
  }

  ngOnInit(): void {
  }

}
