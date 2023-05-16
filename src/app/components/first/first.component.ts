import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  @Input('banana') fruits!: Array<string>;
  @Output('emit') fruitValue: EventEmitter<Array<string>> = new EventEmitter<Array<string>>();
  firstFruits!: Array<string>;
  constructor() { }

  ngOnInit(): void {
    this.firstFruits = this.fruits;
  }


  emitValue(): void {
    this.fruitValue.emit(this.firstFruits);
  }

}
