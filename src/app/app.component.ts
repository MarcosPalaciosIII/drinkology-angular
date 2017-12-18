import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserApiService } from './services/user-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Drinkologist';

  constructor (
    public userThang: UserApiService,
    private routerThang: Router
  ) {}

  ngOnInit() {
    this.userThang.getCheckLogin()
    // no ".then()" because "getCheckLogin()"
    // already has the ".then()" that we need
    .catch((err) => {
      alert("Sorry! Something went wrong.")
    });
  }

  startLogOutAjax() {
    this.userThang.logout()
    .then(() => {
      this.routerThang.navigate(['/']);
    })
    .catch((err) => {
      alert("Sorry! Something went wrong.")
    });
  }
}
