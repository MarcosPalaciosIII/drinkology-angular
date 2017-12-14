import { Component, OnInit } from '@angular/core';
import { DrinkApiService, Drink } from '../../services/drink-api.service';

@Component({
  selector: 'app-add-drink',
  templateUrl: './add-drink.component.html',
  styleUrls: ['./add-drink.component.css']
})
export class AddDrinkComponent implements OnInit {

  newDrink = new Drink();

  constructor(private drinkThang: DrinkApiService) { }

  ngOnInit() {
  }

  addDrink() {
    this.drinkThang.postDrinks(this.newDrink)
    .then((apiResults: Drink) => {
      this.newDrink = new Drink();
      alert("Your Drink has been added!")
    })
    .catch((err) => {
      alert("Sorry! Something went wrong.");
      console.log("Add Drink in error");
      console.log(err);
    });

  }

}
