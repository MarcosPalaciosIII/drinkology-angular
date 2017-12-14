import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DrinkApiService, Drink } from '../services/drink-api.service';
import { UserApiService, User } from '../services/user-api.service';


@Component({
  selector: 'app-drink-details',
  templateUrl: './drink-details.component.html',
  styleUrls: ['./drink-details.component.css']
})
export class DrinkDetailsComponent implements OnInit {
  // favorites = this.userThang.currentUser.favorites;
  drinkInfo = new Drink();
  userInfo = new User();

  // drinkUrl: any;

  constructor(
    private activatedThang: ActivatedRoute,
    private userThang: UserApiService,
    private drinkThang: DrinkApiService,
    private routerThang: Router
  ) { }

  ngOnInit() {
    console.log(this.userThang);
    // get the URL parameters of this route
    this.activatedThang.params.subscribe((myReqParams) => {
        //        {path: 'drinks/:id'}
        //                         |
        console.log(myReqParams.id);

        // this.drinkUrl = myReqParams.id;
        this.getDrinkDetails(myReqParams.id);

    });
  } // ngOnInit()

  getDrinkDetails(urlId) {
    this.drinkThang.getOneDrink(urlId)
    .then((drinkResults: Drink) => {
      // THE MAGIC HAPPENS HERE
      // (assign API results to component property)
      this.drinkInfo = drinkResults;
    })
    .catch((err) => {
      alert("Sorry! Something went wrong.")

      console.log("Drink List Error!")
      console.log(err)
    });
  } // getDrinkDetails()

  addUserFavorites() {
    console.log(this.drinkInfo._id)

    this.userThang.addUserFavorites(this.drinkInfo._id)
    .then((drinkResults: User) => {
      alert("Drink Added to Favorites")

      this.userInfo = drinkResults;
    })
    .catch((err) => {
      alert("Sorry! Something went wrong.")

      console.log("Add Drink to List Error!")
      console.log(err)
    })
  }

  deleteUserFavorites() {
    console.log(this.drinkInfo._id)

    this.userThang.deleteUserFavorites(this.drinkInfo._id)
    .then((drinkResults: User) => {
      alert("Drink Removed from Favorites")

      this.userInfo = drinkResults;
    })
    .catch((err) => {
      alert("Sorry! Something went wrong.")

      console.log("Remove Drink from List Error!")
      console.log(err)
    })
  }

}
