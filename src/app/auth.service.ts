import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  isAuthenticatedUser() {
    if (sessionStorage.getItem("userkey") === null) {
      return false;
    }
    else {
      return true;
    }
  }
}
