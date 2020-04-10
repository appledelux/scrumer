import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

const credentials = {
  username: 'pablo.manzano@civica-soft.com',
  password: '2484FREsas*'
};

@Injectable({ providedIn: 'root' })
export class JiraService {
  constructor(private httpClient: HttpClient) { }


  getUrl = (context: string): string => environment.JIRA_API + context;

  session = (): Observable<any> => {
    return this.httpClient
      .post(
        this.getUrl('/auth/1/session'),
        credentials,
        {
          headers: new HttpHeaders()
            .set('Content-Type', 'application/json'), observe: 'response' as 'response', withCredentials: true
        });
  }
}
