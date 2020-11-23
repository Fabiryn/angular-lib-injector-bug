import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProvidedInRootPage } from './provided-in-root.page';

const routes: Routes = [
  {
    path: '',
    component: ProvidedInRootPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProvidedInRootPageRoutingModule {}
