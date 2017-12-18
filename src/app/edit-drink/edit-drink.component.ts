import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DrinkApiService, Drink } from '../services/drink-api.service';
import { UserApiService, User } from '../services/user-api.service';

@Component({
  selector: 'app-edit-drink',
  templateUrl: './edit-drink.component.html',
  styleUrls: ['./edit-drink.component.css']
})
export class EditDrinkComponent implements OnInit {

  drinkInfo = new Drink();
  userInfo = new User();

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
        console.log(this.drinkInfo);

        this.getDrinkDetailsEdit(myReqParams.id);

    });
  } // ngOnInit()

  getDrinkDetailsEdit(urlId) {
    this.drinkThang.getOneDrinkEdit(urlId)
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
  } // getDrinkDetailsEdit()

  putEditDrink(urlId) {
    console.log(this.drinkInfo._id);

    this.drinkThang. putEditDrink(this.drinkInfo)
    .then((drinkResults: Drink) => {
      this.drinkInfo = drinkResults;
      alert("Your Drink Has Been Edited");
    })
    .catch((err) => {
      alert("Sorry! Something went wrong.")

      console.log("Drink List Error!")
      console.log(err)
    });

  }

}
