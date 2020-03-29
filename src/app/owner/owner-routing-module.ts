import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {RegisterOwnerComponent} from './register-owner/register-owner.component';
import {OwnerHomeComponent} from './owner-home/owner-home.component';

const router: Routes = [
  {
    path: 'owner',
    children: [
      {
        path: 'register',
        component: RegisterOwnerComponent
      },
      {
        path: '',
        component: OwnerHomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(router)
  ],
  exports: [
    RouterModule
  ]
})
export class OwnerRoutingModule {
}
