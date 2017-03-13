import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MainPage } from '../pages/main/main';
import { AboutPage } from '../pages/about/about';
import { HelpPage } from '../pages/help/help';
import { ContactPage } from '../pages/contact/contact';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MainPage,
    AboutPage,
    HelpPage,
    ContactPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MainPage,
    AboutPage,
    HelpPage,
    ContactPage    
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
