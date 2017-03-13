import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MainPage } from  '../main/main';
import { AboutPage } from  '../about/about';
import { HelpPage } from  '../help/help';
import { ContactPage } from  '../contact/contact';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  rootPage :any = MainPage ;
  constructor(public navCtrl: NavController) { 
    console.log('home page running');
  }
  openMain(){
    this.rootPage = MainPage ;
  }
  openAbout(){
    this.rootPage = AboutPage ;
  }
  openHelp(){
    this.rootPage = HelpPage;
  }
  openContact(){
    this.rootPage = ContactPage;
  }




}
