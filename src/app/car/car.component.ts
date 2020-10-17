import { Component, OnInit } from '@angular/core';
import {CarService} from '../car.service';
import { from } from 'rxjs';
import {Car} from '../Car'
import {CarchildComponent} from '../carchild/carchild.component'
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
carName:string

  constructor(private carservice:CarService) { }

  ngOnInit(): void {
    this.getCarSubscribe();
  }
  setName(car){
    
    this.carName=car;
   }
   
  car:Car[];
  getCarSubscribe():void{
    this.carservice.getCar().subscribe(car=>this.car=car);
  }
  trackByFunction(index,t){     //optimization
    return index
  }
}





  

