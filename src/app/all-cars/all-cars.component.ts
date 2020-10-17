import { Component, OnInit, TrackByFunction } from '@angular/core';
import {CarService} from '../car.service';
import { from } from 'rxjs';
import {Car} from '../Car'
import { car } from '../MockData';
@Component({
  selector: 'app-all-cars',
  templateUrl: './all-cars.component.html',
  styleUrls: ['./all-cars.component.css']
})
export class AllCarsComponent implements OnInit {

  constructor(private allservice:CarService) { }
 


  

  ngOnInit(): void {
    this.getCarSubscribe();
  }  
  car:Car[];
  getCarSubscribe():void{
    this.allservice.getCar().subscribe(car=>this.car=car);
  }

}
