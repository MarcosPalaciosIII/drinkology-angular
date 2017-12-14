import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserApiService, User } from '../services/user-api.service';
import { DrinkApiService, Drink } from '../services/drink-api.service';

@Component({
  selector: 'app-user-drinks',
  templateUrl: './user-drinks.component.html',
  styleUrls: ['./user-drinks.component.css']
})
export class UserDrinksComponent implements OnInit {

  listOfDrinks: Drink[] = [];

  showConfig: any = {
    showAddDrink: true
  };

  constructor(
    private userThang: UserApiService,
    private drinkThang: DrinkApiService,
    private routerThang: Router
  ) { }

  ngOnInit() {
  this.drinkThang.getUserFavorites()
  .then((drinkResults: Drink[]) => {
    console.log(drinkResults);

    // THE MAGIC HAPPENS HERE
    // (assign API results to component property)
    this.listOfDrinks = drinkResults;
  })
  .catch((err) => {
    alert("Sorry! Something went wrong.")

    console.log("Drink List Error!")
    console.log(err)
  })
  } // ngOnInit()

  toggleShow() {
    if (this.showConfig.showAddFood) {
      this.showConfig.showAddFood = false;
    }
    else {
      this.showConfig.showAddFood = true;
    }
  }
}
