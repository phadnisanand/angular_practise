import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  receivedData: string;
  constructor() {  this.receivedData = ''; }
  data = "Message from the parent to the child";
  status = "All good";
  geeky = "GeekClass";
  ngOnInit(): void {
  }
  handleDataFromChild(data: string) {
    this.receivedData = data;
  }
  showData() {

  }
  ClassesToApply() {
    this.geeky = "NewGeekClass";
  }
}
