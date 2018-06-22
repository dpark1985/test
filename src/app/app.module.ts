import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

import { ComponentsModule } from '../components/components.module';

import { MyApp } from './app.component';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RoutingService } from '../services/routing-service';
import { SpaceService } from '../services/space-service';
import { SystemService } from '../services/system-service';

@NgModule({
	declarations: [
		MyApp
	],
	imports: [
		BrowserModule,
		IonicModule.forRoot(MyApp, {
			preloadModules: true
		}),
		IonicStorageModule.forRoot(),
		ComponentsModule
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp
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
