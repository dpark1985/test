import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpaceColorsPage } from './space-colors';

import { ComponentsModule } from '../../../components/components.module';

@NgModule({
	declarations: [
		SpaceColorsPage,
	],
	imports: [
		IonicPageModule.forChild(SpaceColorsPage),
		ComponentsModule
	],
})
export class SpaceColorsPageModule { }
