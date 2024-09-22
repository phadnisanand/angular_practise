import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent implements OnInit {

  constructor() { }
  nameofstudent = ['dheeraj','anand','manisha','jayshri','ali'];

  title = 'pipesDemo';

  fullname = 'sacHin rAmesh tenDulkar'

  aNumber = 10.912746678

  aCurrency = 0.999999678723472734

  datevar = new Date()

  elementsArr = [200,400,500,600,800,900];
  ngOnInit(): void {
  }

}
