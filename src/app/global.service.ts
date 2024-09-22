import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  baseURL:string = "http://localhost:3000"   // where our data is stored in JSON server
  constructor(private http: HttpClient) { }   // Injected HTTP Client

  getRecords(table: string){       // READ records
    const url = `${this.baseURL}/${table}`;
    return this.http.get(url);
  }

}
