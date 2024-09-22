
import { Component, OnInit } from '@angular/core';
import { LifeCycleComponent } from '../life-cycle/life-cycle.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  fname: string = "";
  lname: string = "";
  result: string= "";

  constructor() {

  }
  concat() {
      this.result = this.fname + ' ' + this.lname;
  }

  ngOnInit(): void {
  }

}
