import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'angular',
    loadChildren: () => import('./angular/angular.module').then( m => m.AngularPageModule)
  },
  {
    path: 'ionic',
    loadChildren: () => import('./ionic/ionic.module').then( m => m.IonicPageModule)
  },
  {
    path: 'provided-in-root',
    loadChildren: () => import('./provided-in-root/provided-in-root.module').then( m => m.ProvidedInRootPageModule)
  },
  {
    path: 'app-service',
    loadChildren: () => import('./app-service/app-service.module').then( m => m.AppServicePageModule)
  },
  {
    path: 'angular-working',
    loadChildren: () => import('./angular-working/angular-working.module').then( m => m.AngularWorkingPageModule)
  },
  {
    path: 'ionic-working',
    loadChildren: () => import('./ionic-working/ionic-working.module').then( m => m.IonicWorkingPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
