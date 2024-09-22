import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
  constructor(private http: HttpClient) {}

  getProducts() {
     return this.http.get(`https://dummyjson.com/products`);
  }

  getProductDetail(id: String) {
    return this.http.get(`https://dummyjson.com/products/`+ id);
  }
}
