import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {IonicPageRoutingModule} from './ionic-routing.module';

import {IonicPage} from './ionic.page';
import {IonicServiceModule} from 'herbert';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        IonicPageRoutingModule,
        IonicServiceModule
    ],
    providers: [],
    declarations: [IonicPage]
})
export class IonicPageModule {
}
