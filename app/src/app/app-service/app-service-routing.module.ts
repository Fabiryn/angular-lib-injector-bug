import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppServicePage} from './app-service.page';

const routes: Routes = [
    {
        path: '',
        component: AppServicePage
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AppServicePageRoutingModule {
}
