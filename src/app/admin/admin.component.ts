import { Component, OnInit } from '@angular/core';
import { Beer } from '../beer.model';
import { BeerService } from '../beer.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [BeerService]
})

export class AdminComponent implements OnInit {

  constructor(private beerService: BeerService) { }

  ngOnInit() {
  }

  submitForm(brewery: string, name: string, style: string, description: string, price: number) {
    var newBeer: Beer = new Beer(brewery, name, style, description, price);
    this.beerService.addBeer(newBeer);
  }

}
