import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmpService } from '../emp.service';
import {Router} from "@angular/router";
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit  {
  constructor(private EmpService: EmpService, private router: Router) {}
  emp: any= [];
  searchTerm = "";
  count: any = 10;
  p: any = 1;
  ngOnInit(): void {
    this.EmpService.getProducts()
      .subscribe(emp => {
      this.emp =  emp;
    });
  }
  getProductDetails(id: String) {
    this.router.navigate(['/service/' + id]);
  }
}
