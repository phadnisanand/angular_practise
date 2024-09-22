import { Component, OnInit } from '@angular/core';
import { GlobalService } from './global-service.service';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'myapp';
  isLoggedIn:boolean = false;
  constructor(private service: GlobalService, private router: Router, private authservice: AuthService) { }
  logout(){
    if(confirm("Are you sure you want to logout 🥹 ?")){
      this.service.logout()
      this.isLoggedIn = false;
      this.router.navigate(['/login'])

    }
  }
  ngOnInit() {
    if(this.authservice.isAuthenticatedUser()) {
      this.isLoggedIn = true;
    }
  }
}
