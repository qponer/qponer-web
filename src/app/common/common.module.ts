import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NavbarComponent} from './component/navbar/navbar.component';
import { LoginModalComponent } from './component/login-modal/login-modal.component';


@NgModule({
  declarations: [
    NavbarComponent,
    LoginModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    NavbarComponent
  ],
  entryComponents: [
    LoginModalComponent
  ]
})
export class SharedModule {
}
