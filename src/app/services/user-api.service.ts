import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

import { environment } from '../../environments/environment';

export class User {
  // sign up form
  fullName: string;

  // sign up & log in forms
  username: string;
  password: string;

  // user
  favorites: string[];
  // assigned by the database
  _id: string;
  createdAt: string;
  updatedAt: string;
}

@Injectable()
export class UserApiService {

  currentUser: User;

  constructor(private httpThang: HttpClient) { }


  postSignup(userInfo: User) {
    return this.httpThang.post(
      `${environment.backendUrl}/api/signup`,
      userInfo,
      {withCredentials: true}
    )
    .toPromise()
    .then((apiResult: any) => {
      // update "currentUser" since we are logged in
      this.currentUser = apiResult.userInfo;
      // return "apiResult" for the component
      return apiResult;
    });
  } // POST /api/signup


  postLogin(userInfo: User) {
    return this.httpThang.post(
      `${environment.backendUrl}/api/login`,
      userInfo,
      {withCredentials: true}
    )
    .toPromise()
    .then((apiResult: any) => {
      // update "currentUser" since we are logged in
      this.currentUser = apiResult.userInfo;
      // return "apiResult" for the component
      return apiResult;
    });
  } // POST /api/login


  logout() {
  return this.httpThang.delete(
    `${environment.backendUrl}/api/logout`,
    {withCredentials: true}
  )
  .toPromise()
  .then((apiResult) => {
    // update "currentUser" since we are logged OUT
    this.currentUser = null;
    // return "apiResult" for the component
    return apiResult;
  });
} // DELETE /api/logout


  getCheckLogin() {
    return this.httpThang.get(
      `${environment.backendUrl}/api/checklogin`,
      // send the cookies even to a different domain
      {withCredentials: true}
    )
    .toPromise()
    .then((apiResult: any) => {
      // update "currentUser" in case we are logged in
      this.currentUser = apiResult.userInfo;
      // return "apiResult" for the component
      return apiResult;
    });
  } // GET /api/checklogin


  putAddDrink(userInfo: User) {
    return this.httpThang.put(
      `${environment.backendUrl}/api/my-drinks`,
      userInfo,
      {withCredentials: true}
    )
    .toPromise()
    .then((apiResult: any) => {
      // update "currentUser" since we are logged in
      this.currentUser = apiResult.userInfo;
      // return "apiResult" for the component
      return apiResult;
    });
  } // PUT/api/my-drinks

  addUserFavorites(oneId: string) {
    return this.httpThang.put(
      `${environment.backendUrl}/api/drinks/${oneId}/add`,
      {},
      {withCredentials: true}
    ).toPromise();
  } // PUT /api/drinks

  deleteUserFavorites(oneId: string) {
    return this.httpThang.delete(
      `${environment.backendUrl}/api/drinks/${oneId}/delete`,
      {withCredentials: true}
    ).toPromise();
  } // DELETE /api/drinks


}
