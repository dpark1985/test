import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FilesPage } from './files';

import { ComponentsModule } from '../../components/components.module';

@NgModule({
	declarations: [
		FilesPage,
	],
	imports: [
		IonicPageModule.forChild(FilesPage),
		ComponentsModule
	],
})
export class FilesPageModule { }
