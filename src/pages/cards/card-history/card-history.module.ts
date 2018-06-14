import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CardHistoryPage } from './card-history';

import { ComponentsModule } from '../../../components/components.module';

@NgModule({
	declarations: [
		CardHistoryPage,
	],
	imports: [
		IonicPageModule.forChild(CardHistoryPage),
		ComponentsModule
	],
})
export class CardHistoryPageModule { }
