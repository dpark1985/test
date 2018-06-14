import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccountEmailVerificationPage } from './account-email-verification';

import { ComponentsModule } from '../../../components/components.module';

@NgModule({
	declarations: [
		AccountEmailVerificationPage,
	],
	imports: [
		IonicPageModule.forChild(AccountEmailVerificationPage),
		ComponentsModule
	],
})
export class AccountEmailVerificationPageModule { }
