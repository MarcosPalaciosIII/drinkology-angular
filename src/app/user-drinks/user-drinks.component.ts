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

  constructor(
    private userThang: UserApiService,
    private drinkThang: DrinkApiService,
    private routerThang: Router
  ) { }

  ngOnInit() {
  // this.userThang.getUserFavorites()
  // .then((userFromDb: User[]) => {
  //   console.log(userFromDb);
  //
  //   // THE MAGIC HAPPENS HERE
  //   // (assign API results to component property)
  //   this.userFromDb.favorites;
  // })
  // .catch((err) => {
  //   alert("Sorry! Something went wrong.")
  //
  //   console.log("Drink List Error!")
  //   console.log(err)
  // })
  } // ngOnInit()
}
