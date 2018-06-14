import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpaceMembersPage } from './space-members';

import { ComponentsModule } from '../../../components/components.module';

@NgModule({
	declarations: [
		SpaceMembersPage,
	],
	imports: [
		IonicPageModule.forChild(SpaceMembersPage),
		ComponentsModule
	],
})
export class SpaceMembersPageModule { }
