import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private service : GlobalService, private router: Router) {}

  ngOnInit(): void {
  }

  addData(data:any){
    const empObj = {
      name: data.fname,
      post: data.epost,
      salary: data.salary,
      address: data.ecity
    }

    this.service.addRecord("employees",empObj).subscribe( () => {
      alert("Record Added")
      this.router.navigate(['/dashboard'])  // After successfull insertion of data, go back to home page automatically
    })
  }

}
