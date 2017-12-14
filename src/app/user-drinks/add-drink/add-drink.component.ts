import { Component, OnInit } from '@angular/core';
import { DrinkApiService, Drink } from '../../services/drink-api.service';

@Component({
  selector: 'app-add-drink',
  templateUrl: './add-drink.component.html',
  styleUrls: ['./add-drink.component.css']
})
export class AddDrinkComponent implements OnInit {

  drinks: any;

  newDrink: any = {ingredients: []};

  constructor(private drinkThang: DrinkApiService) { }

  ngOnInit() {
    this.drinks = Drink
  }

  addDrink() {
    this.drinks.push(this.newDrink);

    // for(let key in this.newFood){
    //   this.newFood[key] = "";
    // }
    console.log(Drink)
  }

}
