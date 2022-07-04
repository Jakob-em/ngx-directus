import { Component } from '@angular/core';
import {Directus} from '@directus/sdk';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private directus: Directus<any>) {
    this.directus.items('products').readByQuery().then(console.log);
  }
}
