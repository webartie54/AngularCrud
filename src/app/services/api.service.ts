import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from "../model/user";
import { Observable } from "rxjs/index";
import { ApiResponse } from "../model/api.response";

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'https://localhost:44342/Api/Users/';

  login(loginPayload: any): Observable<ApiResponse> {
    return this.http.post<ApiResponse>('http://localhost:8080/' + 'token/generate-token', loginPayload);
  }

  getUsers(): Observable<any> {
    
    return this.http.get<any>(this.baseUrl);
  }

  getUserById(id: number): Observable<any> {
    return this.http.get<any>(this.baseUrl + id);
  }

  createUser(user: User): Observable<any> {
    return this.http.post<ApiResponse>(this.baseUrl, user);
  }

  updateUser(user: User): Observable<any> {
    return this.http.put<any>(this.baseUrl + user.Id, user);
  }

  deleteUser(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrl + id);
  }
}