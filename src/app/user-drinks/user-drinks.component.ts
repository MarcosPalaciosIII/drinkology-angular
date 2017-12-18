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
    showAddDrink: false,
    clicked: false
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

  // setTimeout(() => {
  //   $(".show-addDrink").addClass("animated fadeInDown fadeOutUp");
  // }, 5000);

  } // ngOnInit()

  toggleShow() {

    if (this.showConfig.showAddDrink) {
      this.showConfig.showAddDrink = false;
      setTimeout(() => {
        this.showConfig.clicked = false;

      }, 500);
    }
    else {
      this.showConfig.showAddDrink = true;
      this.showConfig.clicked = true;
    }
  }
}
