import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-child',
  templateUrl: './home-child.component.html',
  styleUrls: ['./home-child.component.css']
})
export class HomeChildComponent implements OnInit {
  @Input() message = "";
  @Output() dataEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {

  }
  sendDataToParent() {
      const data = 'Hello from child message';
      this.dataEvent.emit(data);
  }
}
