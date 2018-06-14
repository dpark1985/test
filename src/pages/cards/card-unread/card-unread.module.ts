import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CardUnreadPage } from './card-unread';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
	declarations: [
		CardUnreadPage,
	],
	imports: [
		IonicPageModule.forChild(CardUnreadPage),
		ComponentsModule
	],
})
export class CardUnreadPageModule { }
