import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import {SharedModule} from '../common/common.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeComponent
  ],
  imports: [
    SharedModule
  ]
})
export class HomeModule { }
