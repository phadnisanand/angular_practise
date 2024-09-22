import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { EmpService } from '../emp.service';
import { ActivatedRoute } from '@angular/router';
import {Router} from "@angular/router";
@Component({
  selector: 'app-services-listing-component',
  templateUrl: './services-listing-component.component.html',
  styleUrls: ['./services-listing-component.component.css']
})
export class ServicesListingComponentComponent implements OnInit {
  testId: String = '';

  constructor(private EmpService: EmpService,private route: ActivatedRoute, private router: Router) {}
  emp: any= [];
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.testId = params['id']; // Access the 'id' parameter from the URL
     // console.log('Test ID:', this.testId);
      this.EmpService.getProductDetail(this.testId)
        .subscribe(emp => {
          this.emp =  emp;
      });
    });

  }
  gotoMainPage() {
    this.router.navigate(['/services']);
  }

}
