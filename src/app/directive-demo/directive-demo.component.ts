import { Component, OnInit } from '@angular/core';
import { CustomDirective } from '../custom.directive';
import { Demo } from '../demo';
@Component({
  selector: 'app-directive-demo',
  templateUrl: './directive-demo.component.html',
  styleUrls: ['./directive-demo.component.css']
})
export class DirectiveDemoComponent implements OnInit {
  users = [
    { "id": 1, "name": "Leanne Graham", "email": "leanne@april.biz" },
    { "id": 2, "name": "Ervin Howell", "email": "ervin@melissa.tv" },
    { "id": 3, "name": "Clementine Bauch", "email": "clementine@yesenia.net"},
  ];
  color: string = 'blue';
  isSuccess: boolean = false;
  constructor() { }
   emp: Demo = {
    id:1,
    name: 'Anand',
    married: true

  };
  ngOnInit(): void {
    console.log(this.emp);
  }

}
