import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TestService} from './test.service';
import {AngularService} from './angular.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    TestService,
    AngularService
  ]
})
export class AngularWorkingServiceModule {
}
