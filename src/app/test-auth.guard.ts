import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class TestAuthGuard implements CanActivate {
  constructor(private authservice:AuthService,private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      if(this.authservice.isAuthenticatedUser()) {
        return true;
      }
       // not logged in so redirect to login page with the return url
       this.router.navigate(['/login']);
       return false;
  }
}
