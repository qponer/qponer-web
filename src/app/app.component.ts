import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Qpon';

  public links = [
    {
      name: 'home',
      url: 'home',
    },
    {
      name: 'contacts',
      url: 'contacts'
    },
    {
      name: 'dynamic',
      url: 'contacts/dynamic-load'
    }
  ];
}
