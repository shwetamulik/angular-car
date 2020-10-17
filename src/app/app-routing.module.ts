import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarComponent } from './car/car.component';
import { CarchildComponent } from './carchild/carchild.component';
import { AllCarsComponent } from './all-cars/all-cars.component';

const routes: Routes = [
  {path:'',component:CarComponent},
  {path:'allcars',component:AllCarsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
