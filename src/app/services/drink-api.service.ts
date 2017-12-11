import { Injectable } from '@angular/core';
import { HttpClient } from '@angular//common/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';

export class Phone {
  drinkName: string;
  description: string;
  image: string;
  ingredients: string[];

  // these are assigned by the database
  drinkCreator: string;
  _id: string;
  createdAt: string;
  updatedAt: string;
}

@Injectable()
export class DrinkApiService {

  constructor(private httpThang: HttpClient) { }

  // GET /api/drinks
  getDrinks() {
    return this.httpThang.get(
      `${environment.backendUrl}/api/drinks`
    ).toPromise();
  }

  // POST /api/drinks


  // GET /api/drinks/:id
  getOneDrink(oneId: string){
  return this.httpThang.get(
    `${environment.backendUrl}/api/drinks/${oneId}`
  ).toPromise();
  }

  // DELETE /api/drinks/:id
  deleteOneDrink(oneId: string) {
  return this.httpThang.delete(
    `${environment.backendUrl}/api/drinks/${oneId}`
  ).toPromise();
  }

}
