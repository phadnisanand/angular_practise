import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-another-home-child',
  templateUrl: './another-home-child.component.html',
  styleUrls: ['./another-home-child.component.css']
})
export class AnotherHomeChildComponent implements OnInit {

  @Output() newEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  showData(value: string) {
    this.newEvent.emit(value);
  }

}
