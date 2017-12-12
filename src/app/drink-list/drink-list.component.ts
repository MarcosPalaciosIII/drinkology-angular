import { Component, OnInit } from '@angular/core';

import { DrinkApiService, Drink } from '../services/drink-api.service';

@Component({
  selector: 'app-drink-list',
  templateUrl: './drink-list.component.html',
  styleUrls: ['./drink-list.component.css']
})
export class DrinkListComponent implements OnInit {

  drinks: Drink[] = [];

  constructor(private drinkThang: DrinkApiService) { }

  ngOnInit() {
    this.drinkThang.getDrinks()
    .then((drinkResults: Drink[]) => {
      console.log("Drink List API")
      console.log(drinkResults);

      // THE MAGIC HAPPENS HERE
      // (assign API results to component property)
      this.drinks = drinkResults;
    })
    .catch((err) => {
      alert("Sorry! Something went wrong.")

      console.log("Drink List Error!")
      console.log(err)
    })
  } // ngOnInit()

}
