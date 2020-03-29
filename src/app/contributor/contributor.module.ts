import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterContributorComponent } from './register-contributor/register-contributor.component';
import {ContributorRoutingModule} from './contributor-routing-module';
import { ContributorHomeComponent } from './contributor-home/contributor-home.component';



@NgModule({
  declarations: [
    RegisterContributorComponent,
    ContributorHomeComponent
  ],
  imports: [
    CommonModule,
    ContributorRoutingModule
  ],
  exports: [
    RegisterContributorComponent
  ]
})
export class ContributorModule { }
