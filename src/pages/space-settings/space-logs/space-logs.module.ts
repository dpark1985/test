import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpaceLogsPage } from './space-logs';

import { ComponentsModule } from '../../../components/components.module';

@NgModule({
	declarations: [
		SpaceLogsPage,
	],
	imports: [
		IonicPageModule.forChild(SpaceLogsPage),
		ComponentsModule
	],
})
export class SpaceLogsPageModule { }
