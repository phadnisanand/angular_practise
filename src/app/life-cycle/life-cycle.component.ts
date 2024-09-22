import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit {

  constructor() {
    console.log("Constructor");
   }

  ngOnInit(): void {
    console.log("ngOnInit");
  }
  ngOnChanges(){
    console.log("ngOnChanges");
  }
  ngDoCheck(){
    console.log("ngDoCheck");
  }
  ngAfterContentInit(){
    console.log("ngAfterContent Init");
  }
  ngAfterContentChecked(){
    console.log("ngAfterContent checked");
  }
  ngAfterViewInit(){
    console.log("ngAfterView Init");
  }
  ngAfterViewChecked(){
    console.log("ngAfterView checked");

  }
  ngOnDestroy(){
    console.log("ngOnDestroy");
  }

}
