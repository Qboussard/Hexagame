import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Screenshot } from '@ionic-native/screenshot';

import { MyApp } from './app.component';
import { NormalPage } from '../pages/normal/normal';
import { EasyPage } from '../pages/easy/easy';
import { NavPage } from '../pages/nav/nav';

@NgModule({
  declarations: [
    MyApp,
    NormalPage,
    EasyPage,
    NavPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NormalPage,
    EasyPage,
    NavPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SocialSharing,
    Screenshot,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
