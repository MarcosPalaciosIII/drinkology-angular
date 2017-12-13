import { Component, OnInit } from '@angular/core';
import { UserApiService } from '../services/user-api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private userThang: UserApiService) { }

  ngOnInit() {
  }

}
