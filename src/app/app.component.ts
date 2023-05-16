import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bindings';

  isAllowed = true;
  stringTitle = 'Angular is good';
  ngModelValue = 'value';


  eventBinding(): string {
    return 'Angular is good';
  }

  showModelValue(): void {
    console.log(this.ngModelValue);
  }

  catchChildComponentValue(event: any): void {
    console.log(event);
  }
}
