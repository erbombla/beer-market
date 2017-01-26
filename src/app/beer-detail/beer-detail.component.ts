import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Beer } from '../beer.model';
import { BeerService } from '../beer.service';

@Component({
  selector: 'app-beer-detail',
  templateUrl: './beer-detail.component.html',
  styleUrls: ['./beer-detail.component.css'],
  providers: [BeerService]
})

export class BeerDetailComponent implements OnInit {
  beerId: number;
  beerToDisplay: Beer;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private beerService: BeerService
  ) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.beerId = parseInt(urlParameters['id']);
    });
    this.beerToDisplay = this.beerService.getBeerById(this.beerId);
  }

}
