import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/auth-service.service';
import {Observable} from 'rxjs';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {LoginModalComponent} from '../login-modal/login-modal.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLoggedIn: Observable<boolean>;
  username: Observable<string>;

  constructor( public authService: AuthService, public matDialog: MatDialog ) {
    this.isLoggedIn = authService.isLoggedIn();
    this.username = authService.username();
  }

  ngOnInit(): void {
  }

  openLoginDialog(): void {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = 'modal-component';
    dialogConfig.height = '350px';
    dialogConfig.width = '600px';
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(LoginModalComponent, dialogConfig);
  }

}
