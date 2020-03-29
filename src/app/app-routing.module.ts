import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home/home.component';

const router: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'contributor',
    loadChildren: () => import('./contributor/contributor.module').then(module => module.ContributorModule)
  },
  {
    path: 'bo',
    loadChildren: () => import('./owner/owner.module').then(module => module.OwnerModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(router, {
      useHash: true
    }),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
