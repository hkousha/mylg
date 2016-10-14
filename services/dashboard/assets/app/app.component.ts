import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'mylg-app',
  template: `<router-outlet></router-outlet>`,
  directives: [RouterOutlet]
})
export class AppComponent { }
