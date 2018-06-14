import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InterlinksPage } from './interlinks';

import { ComponentsModule } from '../../components/components.module';

@NgModule({
	declarations: [
		InterlinksPage,
	],
	imports: [
		IonicPageModule.forChild(InterlinksPage),
		ComponentsModule
	],
})
export class InterlinksPageModule { }
