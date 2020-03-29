import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Credentials} from '../model';
import {take} from 'rxjs/operators';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {
  isLoginSubject = new BehaviorSubject<boolean>(AuthService.hasToken());
  usernameSubject = new BehaviorSubject<string>(AuthService.getUsername());

  private readonly authUrl = `${environment.apiUrl}/api/auth/login`;

  constructor(private httpClient: HttpClient, private router: Router) { }

  private static hasToken(): boolean {
    return !!localStorage.getItem('jwt');
  }

  private static getUsername(): string {
    return localStorage.getItem('username');
  }

  isLoggedIn(): Observable<boolean> {
    return this.isLoginSubject.asObservable();
  }

  username(): Observable<string> {
    return this.usernameSubject.asObservable();
  }

  getAuthorizationHeaders(): HttpHeaders {
    let headers = new HttpHeaders();
    headers = headers.set('Authentication', 'Bearer ' + localStorage.getItem('jwt'));
    return headers;
  }

  login(credentials: Credentials): void {
    this.httpClient.post<LoginData>(this.authUrl, credentials)
      .subscribe(
        (response) => {
          localStorage.setItem('jwt', response.jwt);
          localStorage.setItem('userType', response.type);
          localStorage.setItem('username', response.username);
          localStorage.setItem('id', response.id + '');
          this.isLoginSubject.next(true);
          this.usernameSubject.next(response.username);

          if (response.type === 'CONTRIBUTOR') {
            this.router.navigate(['/contributor/']);
          } else {
            this.router.navigate(['/bo/']);
          }
        },
        (error) => {
          console.log(error);
        }
      );
  }

  logout(): void {
    localStorage.removeItem('jwt');
    localStorage.removeItem('userType');
    localStorage.removeItem('username');
    localStorage.removeItem('id');
    this.isLoginSubject.next(false);
    this.usernameSubject.next(null);
    this.router.navigate(['']);
  }
}

interface LoginData {
  jwt: string;
  type: string;
  username: string;
  id: number;
}
