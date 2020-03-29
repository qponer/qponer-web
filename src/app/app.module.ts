import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ContributorModule} from './contributor/contributor.module';
import {HomeModule} from './home/home.module';
import {OwnerModule} from './owner/owner.module';
import {AuthService} from './common/service/auth-service.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatDialogModule} from '@angular/material';
import {SharedModule} from './common/common.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ContributorModule,
    HomeModule,
    OwnerModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    SharedModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent],
  entryComponents: [

  ]
})
export class AppModule { }
