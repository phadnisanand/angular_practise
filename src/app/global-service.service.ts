import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  baseURL:string = "https://json-server-demo-ccoo.onrender.com"   // where our data is stored in JSON server
  constructor(private http: HttpClient) { }   // Injected HTTP Client

  getRecords(table: string){       // READ records
    const url = `${this.baseURL}/${table}`;
    return this.http.get(url);
  }

  addRecord(table:any, empData: any){   // CREATE records
    const url = `${this.baseURL}/${table}`;
    return this.http.post(url,empData)
  }

  getRecord(table:any, id:any){      // READ a SINGLE record
    const url = `${this.baseURL}/${table}/${id}`
    return this.http.get(url)
  }

  updateRecord(table:any, empData:any){   // UPDATE a record
    const url = `${this.baseURL}/${table}/${empData.id}`
    return this.http.put(url, empData)
  }

  deleteRecord(table:any, id:any){    // DELETE a record
    const url = `${this.baseURL}/${table}/${id}`;
    return this.http.delete(url)
  }
  getUserRecords(table: string) {
    const url = `${this.baseURL}/${table}`;
    return this.http.get(url);
  }
  login(user:any){
    sessionStorage.setItem("userkey",user);
  }
  logout(){
    sessionStorage.removeItem("userkey");
  }

}
