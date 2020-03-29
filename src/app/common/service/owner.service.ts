import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from './auth-service.service';
import {Observable, ReplaySubject} from 'rxjs';
import {RankedContributor} from '../model';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

  private readonly apiUrl = `${environment.apiUrl}/api/v1/businessOwners/`;
  private listChange$: ReplaySubject<void> = new ReplaySubject();

  constructor(private httpClient: HttpClient, private authService: AuthService) { }

  public isListUpdated(): Observable<void> {
    return this.listChange$.asObservable();
  }

  listTopContributors(): Observable<RankedContributor[]> {
    const authHeaders = this.authService.getAuthorizationHeaders();
    return this.httpClient.get<RankedContributor[]>(this.apiUrl + 'top-contributors', {headers: authHeaders});
  }
}
