import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RoutingService } from '../services/routing-service';
import { SpaceService } from '../services/space-service';
import { SystemService } from '../services/system-service';

@NgModule({
	declarations: [
		MyApp,
		HomePage,
		ListPage
	],
	imports: [
		BrowserModule,
		IonicModule.forRoot(MyApp, {
			preloadModules: true
		}),
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		HomePage,
		ListPage
	],
	providers: [
		StatusBar,
		SplashScreen,
		{ provide: ErrorHandler, useClass: IonicErrorHandler },
		RoutingService,
		SpaceService,
		SystemService
	]
})
export class AppModule { }
