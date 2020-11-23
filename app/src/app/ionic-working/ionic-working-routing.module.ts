import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {IonicWorkingPage} from './ionic-working.page';

const routes: Routes = [
    {
        path: '',
        component: IonicWorkingPage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class IonicWorkingPageRoutingModule {
}
