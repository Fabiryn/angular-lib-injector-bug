import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {IonicWorkingPageRoutingModule} from './ionic-working-routing.module';

import {IonicWorkingPage} from './ionic-working.page';
import {IonicWorkingServiceModule} from 'herbert';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        IonicWorkingPageRoutingModule,
        IonicWorkingServiceModule
    ],
    declarations: [IonicWorkingPage]
})
export class IonicWorkingPageModule {
}
