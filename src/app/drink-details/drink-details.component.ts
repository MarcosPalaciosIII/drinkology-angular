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

  drinkInfo = new Drink();

  constructor(
    private activatedThang: ActivatedRoute,
    private userThang: UserApiService,
    private drinkThang: DrinkApiService,
    private routerThang: Router
  ) { }

  ngOnInit() {
    // get the URL parameters of this route
    this.activatedThang.params.subscribe((myReqParams) => {
        //        {path: 'drinks/:id'}
        //                         |
        console.log(myReqParams.id)

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

  // startDeleteAjax() {
  //   if (!confirm("Are you Sure?")) {
  //     return;
  //   }
  //   this.drinkThang.deleteOneDrink(this.drinkInfo._id)
  //   .then(() => {
  //     // redirect with the Angular router to list of drinks
  //     this.routerThang.navigate(['/drinks']);
  //   })
  //   .catch((err) => {
  //     alert("Sorry! Something went wrong.")
  //
  //     console.log("Drink List Error!")
  //     console.log(err)
  //   });
  // } // startDeleteAjax()

}
