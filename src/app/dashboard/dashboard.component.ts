import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],

})
export class DashboardComponent implements OnInit {

  constructor(public globalService:GlobalService,  private router: Router) { }
  empData: any;
  p: any = 1;   // these both for pagination, count represents number of rows per page
  count: any = 6;
  term: any;

  ngOnInit(): void {
    this.globalService.getRecords("employees")
      .subscribe(emp => {
        this.empData =  emp;
    });
  }

  delete(id:any){
    this.globalService.deleteRecord("employees",id).subscribe(()=>{
      alert("Record Deleted")
      this.globalService.getRecords("employees")
      .subscribe(emp => {
        this.empData =  emp;
    });
    })
  }

}
