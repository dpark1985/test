import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { O2TabBarComponent } from './o2-tab-bar/o2-tab-bar';
import { O2LeftSideMenuComponent } from './o2-left-side-menu/o2-left-side-menu';
import { O2RightSideMenuComponent } from './o2-right-side-menu/o2-right-side-menu';
import { O2TopSideNavComponent } from './o2-top-side-nav/o2-top-side-nav';

@NgModule({
    declarations: [
        O2TabBarComponent,
        O2LeftSideMenuComponent,
        O2RightSideMenuComponent,
        O2TopSideNavComponent,
        O2TopSideNavComponent
    ],
    imports: [
        IonicPageModule
    ],
    exports: [
        O2TabBarComponent,
        O2LeftSideMenuComponent,
        O2RightSideMenuComponent,
        O2TopSideNavComponent,
        O2TopSideNavComponent
    ]
})
export class ComponentsModule { }
