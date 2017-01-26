import { Injectable } from '@angular/core';
import { Beer } from './beer.model';
import { BEERS } from './mock-beers';

@Injectable()
export class BeerService {

  constructor() { }

  getBeers() {
    return BEERS;
  }

  getBeerById(beerId: number){
    for (var i = 0; i <= BEERS.length - 1; i++) {
      if (BEERS[i].id === beerId) {
        return BEERS[i];
      }
    }
  }
}
