import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {AppServicePageRoutingModule} from './app-service-routing.module';
import {AppServicePage} from './app-service.page';
import {AppTestNoProvidedInService} from '../services/app-test-no-provided-in.service';
import {AppTestService} from '../services/app-test.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AppServicePageRoutingModule
    ],
    providers: [
        // adding this service in app.module will also work
        AppTestNoProvidedInService,
        // adding the service manual again works
        // AppTestService
    ],
    declarations: [AppServicePage]
})
export class AppServicePageModule {
}
