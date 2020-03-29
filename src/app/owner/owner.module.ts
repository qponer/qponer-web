import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterOwnerComponent } from './register-owner/register-owner.component';
import { OwnerHomeComponent } from './owner-home/owner-home.component';
import {OwnerRoutingModule} from './owner-routing-module';



@NgModule({
  declarations: [RegisterOwnerComponent, OwnerHomeComponent],
  imports: [
    CommonModule,
    OwnerRoutingModule
  ]
})
export class OwnerModule { }
