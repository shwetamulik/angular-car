import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Car} from './Car';
import { car } from './MockData';
@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor() { }

  
  getCar():Observable<Car[]>
  {
    return of(car);
  }
}
