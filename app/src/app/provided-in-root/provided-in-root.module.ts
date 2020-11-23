import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {ProvidedInRootPageRoutingModule} from './provided-in-root-routing.module';

import {ProvidedInRootPage} from './provided-in-root.page';
import {ProvidedInRootServiceModule} from 'herbert';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ProvidedInRootPageRoutingModule,
        ProvidedInRootServiceModule
    ],
    declarations: [ProvidedInRootPage]
})
export class ProvidedInRootPageModule {
}
