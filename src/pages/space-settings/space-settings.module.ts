import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpaceSettingsPage } from './space-settings';

import { ComponentsModule } from '../../components/components.module';

@NgModule({
	declarations: [
		SpaceSettingsPage,
	],
	imports: [
		IonicPageModule.forChild(SpaceSettingsPage),
		ComponentsModule
	],
})
export class SpaceSettingsPageModule { }
