import { Component, OnInit } from '@angular/core';
import { Beer } from '../beer.model';
import { Router } from '@angular/router';
import { BeerService } from '../beer.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
  providers: [BeerService]
})

export class StoreComponent implements OnInit {
  beers: Beer[];

constructor(private router: Router, private beerService: BeerService){}

ngOnInit() {
  this.beers = this.beerService.getBeers();
}

goToDetailPage(clickedBeer: Beer) {
  this.router.navigate(['beers', clickedBeer.id]);
 };

}
