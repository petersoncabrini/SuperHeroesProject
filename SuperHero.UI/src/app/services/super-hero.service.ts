import { Injectable } from '@angular/core';
import { SuperHero } from '../models/super-hero';

@Injectable({
  providedIn: 'root'
})
export class SuperHeroService {

  constructor() { }

  public getSuperHeroes(): SuperHero[] {
    let hero = new SuperHero();
    hero.id = 1;
    hero.name = "Spider-Man";
    hero.fistName = "Peter";
    hero.lastName = "Parker"
    hero.city = "New York"

    return [hero];
  }

}
