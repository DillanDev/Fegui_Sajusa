import { Injectable } from '@angular/core';
import { LoginI } from '../../../models/admin/login/login.interface';
import {ResponseI} from '../../../models/admin/login/response.interface';
import {HttpClient,HttpHeaders}  from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url: string = "http://143.198.97.26:3000/"
  constructor(private http:HttpClient) { }

  LoginByEmail(form:LoginI):Observable<ResponseI>{
    let direccion = this.url + "fegui_sajusa/api/v1/employees/auth/login";
    return this.http.post<ResponseI>(direccion,form);

  }
}
