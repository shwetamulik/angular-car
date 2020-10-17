import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { CarchildComponent } from './carchild/carchild.component';
import { AllCarsComponent } from './all-cars/all-cars.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    CarchildComponent,
    AllCarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
