import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpaceStoragePage } from './space-storage';

import { ComponentsModule } from '../../../components/components.module';

@NgModule({
	declarations: [
		SpaceStoragePage,
	],
	imports: [
		IonicPageModule.forChild(SpaceStoragePage),
		ComponentsModule
	],
})
export class SpaceStoragePageModule { }
