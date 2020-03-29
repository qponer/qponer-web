import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import {AuthService} from '../../service/auth-service.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {take} from 'rxjs/operators';
import {Credentials} from '../../model';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {

  public formGroup: FormGroup;
  private credentials: Credentials;

  constructor(public dialogRef: MatDialogRef<LoginModalComponent>, public authService: AuthService) { }

  ngOnInit() {
    this.formGroup = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(3)
      ])
    });
  }

  login() {
    this.credentials = {...this.credentials, ...this.formGroup.value};
    this.authService.login(this.credentials);
    this.closeModal();
  }

  closeModal() {
    this.dialogRef.close();
  }

}

