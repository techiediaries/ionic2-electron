import { Component } from '@angular/core';


import { HomePage } from '../pages/home/home';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = HomePage;

  constructor() {
    console.log('app running');
  }
}
