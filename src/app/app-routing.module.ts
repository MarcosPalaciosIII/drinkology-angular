import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DrinkListComponent } from './drink-list/drink-list.component';
import { DrinkDetailsComponent } from './drink-details/drink-details.component';
import { JoinPageComponent } from './join-page/join-page.component';
import { UserDrinksComponent } from './user-drinks/user-drinks.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'drinks', component: DrinkListComponent },
  { path: 'drinks/:id', component: DrinkDetailsComponent },
  { path: 'join', component: JoinPageComponent },
  { path: 'my-drinks', component: UserDrinksComponent },
  { path: 'drinks/:id/add', component: DrinkDetailsComponent },
  { path: 'drinks/:id/delete', component: DrinkDetailsComponent },

  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
