import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-carchild',
  templateUrl: './carchild.component.html',
  styleUrls: ['./carchild.component.css']
})
export class CarchildComponent implements OnInit {
@Input() car:any;
  constructor() { }

  ngOnInit(): void {
   
  }

}
