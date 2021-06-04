import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtToken } from '../models/JwtToken';
import { User } from '../models/User';
import { map } from 'rxjs/operators';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseURL="http://localhost:8080/auth/login";

  constructor(private httpClient:HttpClient,private localSt:LocalStorageService) {  }
  Login(user:User): Observable<boolean>{
    return this.httpClient.post<JwtToken>(`${this.baseURL}`,user).pipe(map(data => {
      this.localSt.store('authenticationToken',data.authenticationToken);
      this.localSt.store('username',data.username);
      return true;

    }));
  }
}
