import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccountResetsPage } from './account-resets';

import { ComponentsModule } from '../../../components/components.module';

@NgModule({
	declarations: [
		AccountResetsPage,
	],
	imports: [
		IonicPageModule.forChild(AccountResetsPage),
		ComponentsModule
	],
})
export class AccountResetsPageModule { }
