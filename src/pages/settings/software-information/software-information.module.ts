import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SoftwareInformationPage } from './software-information';

import { ComponentsModule } from '../../../components/components.module';

@NgModule({
	declarations: [
		SoftwareInformationPage,
	],
	imports: [
		IonicPageModule.forChild(SoftwareInformationPage),
		ComponentsModule
	],
})
export class SoftwareInformationPageModule { }
