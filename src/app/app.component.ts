import { Component } from '@angular/core';
import { UiFacade } from './facedes /UIFacede';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(public uiFacede: UiFacade) {}
}
