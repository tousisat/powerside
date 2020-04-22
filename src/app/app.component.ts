import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  inputs: Array<string[]>;

  onFormSubmit(event) {
    this.inputs = Object.entries(event);
  }
}
