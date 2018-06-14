import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TermsAndPoliciesPage } from './terms-and-policies';

import { ComponentsModule } from '../../../components/components.module';

@NgModule({
	declarations: [
		TermsAndPoliciesPage,
	],
	imports: [
		IonicPageModule.forChild(TermsAndPoliciesPage),
		ComponentsModule
	],
})
export class TermsAndPoliciesPageModule { }
