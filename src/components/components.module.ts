import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabBarComponent } from './tab-bar/tab-bar';

@NgModule({
	declarations: [TabBarComponent],
	imports: [
		IonicPageModule
	],
	exports: [TabBarComponent]
})
export class ComponentsModule { }
