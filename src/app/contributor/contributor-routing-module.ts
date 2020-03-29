import {RouterModule, Routes} from '@angular/router';
import {RegisterContributorComponent} from './register-contributor/register-contributor.component';
import {NgModule} from '@angular/core';
import {ContributorHomeComponent} from './contributor-home/contributor-home.component';

const router: Routes = [
  {
    path: '',
    children: [
      {
        path: 'register',
        component: RegisterContributorComponent
      },
      {
        path: '',
        component: ContributorHomeComponent
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
export class ContributorRoutingModule {
}
