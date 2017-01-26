import { Injectable } from '@angular/core';
import { Beer } from './beer.model';
import { BEERS } from './mock-beers';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class BeerService {
  beers: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire) {
    this.beers = angularFire.database.list('beer');
  }

  getBeers() {
    return this.beers;
  }

  addBeer(newBeer: Beer) {
    this.beers.push(newBeer);
  }

  getBeerById(beerId: number){
    // for (var i = 0; i <= BEERS.length - 1; i++) {
    //   if (BEERS[i].id === beerId) {
    //     return BEERS[i];
    //   }
    // }
  }
}
