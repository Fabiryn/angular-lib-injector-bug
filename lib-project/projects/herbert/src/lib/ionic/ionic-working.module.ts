import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {File} from '@ionic-native/file/ngx';
import {IonicService} from './ionic.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    File,
    IonicService
  ]
})
export class IonicWorkingServiceModule {
}
