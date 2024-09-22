import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global-service.service';
import { Router,ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: any;
  password: any;
  isLoggedIn: boolean = false;
  userData: any;
  return: string = '';
  constructor(private service: GlobalService, private router: Router, private route: ActivatedRoute,private authservice: AuthService) { }

  ngOnInit() {
    this.route.queryParams
    .subscribe(params => this.return = params['return'] || '/dashboard');
  }
  login() {
    //console.log(this.username + " - " + this.password)
    this.service.getRecords("Users").subscribe((res) => {
      this.userData = res;
      const data = this.userData.filter((item:any) => {
        return item.username == this.username && item.password == this.password
      })

      if(data.length > 0){
        console.log(this.username);
        this.isLoggedIn = true;
        this.service.login(this.username);
        this.router.navigateByUrl(this.return).then(() => {
          window.location.reload();
        });
      }
      else{
        alert("Username or Password is incorrect");
        this.username = "";
        this.password = "";
      }
    })
  }
}
