import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { DrinkApiService } from './services/drink-api.service'
import { UserApiService } from './services/user-api.service';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DrinkListComponent } from './drink-list/drink-list.component';
import { DrinkDetailsComponent } from './drink-details/drink-details.component';
import { JoinPageComponent } from './join-page/join-page.component';
import { LoginComponent } from './join-page/login/login.component';
import { SignupComponent } from './join-page/signup/signup.component';
import { UserDrinksComponent } from './user-drinks/user-drinks.component';
import { AddDrinkComponent } from './user-drinks/add-drink/add-drink.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NotFoundComponent,
    DrinkListComponent,
    DrinkDetailsComponent,
    JoinPageComponent,
    LoginComponent,
    SignupComponent,
    UserDrinksComponent,
    AddDrinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    DrinkApiService,
    UserApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
