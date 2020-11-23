import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {AngularWorkingPageRoutingModule} from './angular-working-routing.module';

import {AngularWorkingPage} from './angular-working.page';
import {AngularWorkingServiceModule} from 'herbert';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AngularWorkingPageRoutingModule,
        AngularWorkingServiceModule
    ],
    declarations: [AngularWorkingPage]
})
export class AngularWorkingPageModule {
}
