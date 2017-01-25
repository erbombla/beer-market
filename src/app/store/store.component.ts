import { Component } from '@angular/core';
import { Beer } from '../beer.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})

export class StoreComponent {

  constructor(private router: Router){}

  beers: Beer[] = [
    new Beer("Knee Deep Brewing Co.", "Hoptologist",
      "Double India Pale Ale", 8.99, 1),
    new Beer("Epic Brewing Company", "Son of a Baptist",
      "Coffee Stout", 5.99, 2),
    new Beer("Voodoo Brewery", "HooDoo",
      "India Pale Ale", 9.99, 3),
    new Beer("Modern Times Beer", "Haunted Stars",
      "Imperial Rye Porter", 8.99, 4),
    new Beer("Brasserie St. James", "Quadrophobia",
      "Belgian Quadruple", 12.99, 5),
    new Beer("Hoppin' Frog", "Barrel Aged B.O.R.I.S",
      "Barrel Aged Imperial Stout", 14.99, 6)
  ];

 goToDetailPage(clickedBeer: Beer) {
   this.router.navigate(['beers', clickedBeer.id]);
 };
 
}
