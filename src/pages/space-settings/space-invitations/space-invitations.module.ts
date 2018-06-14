import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpaceInvitationsPage } from './space-invitations';

import { ComponentsModule } from '../../../components/components.module';

@NgModule({
	declarations: [
		SpaceInvitationsPage,
	],
	imports: [
		IonicPageModule.forChild(SpaceInvitationsPage),
		ComponentsModule
	],
})
export class SpaceInvitationsPageModule { }
