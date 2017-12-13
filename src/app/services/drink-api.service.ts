import { Injectable } from '@angular/core';
import { HttpClient } from '@angular//common/http';
import 'rxjs/add/operator/toPromise';

import { environment } from '../../environments/environment';

export class Drink {
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

  getDrinks() {
    return this.httpThang.get(
      `${environment.backendUrl}/api/drinks`,
      {withCredentials: true}
    ).toPromise();
  } // GET /api/drinks


  getOneDrink(oneId: string){
  return this.httpThang.get(
    `${environment.backendUrl}/api/drinks/${oneId}`,
    {withCredentials: true}
  ).toPromise();
  } // GET /api/drinks/:id

  deleteOneDrink(oneId: string) {
  return this.httpThang.delete(
    `${environment.backendUrl}/api/drinks/${oneId}`,
    {withCredentials: true}
  ).toPromise();
  } // DELETE /api/drinks/:id

  getUserFavorites() {
    return this.httpThang.get(
      `${environment.backendUrl}/api/my-drinks`,
      {withCredentials: true}
    ).toPromise();
  } // GET /api/my-drinks

  addUserFavorites() {
    return this.httpThang.get(
      `${environment.backendUrl}/api/my-drinks`,
      {withCredentials: true}
    ).toPromise();
  } // PUT /api/drinks

  deleteUserFavorites() {
    return this.httpThang.get(
      `${environment.backendUrl}/api/drinks`,
      {withCredentials: true}
    ).toPromise();
  } // DELETE /api/drinks

}
