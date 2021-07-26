import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { LoginService } from '../../../services/admin/login/login.service';
import { LoginI } from '../../../models/admin/login/login.interface';
import { ResponseI } from '../../../models/admin/login/response.interface';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform = new FormGroup({
    email    : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required)

  });

  constructor( private log: LoginService, private router:Router) { }

  ngOnInit(): void {
  }

  onLogin(form:LoginI){
    this.log.LoginByEmail(form).subscribe(data =>{
      let dataResponse: ResponseI = data;
      if(dataResponse.ok == true){
        localStorage.setItem("token",dataResponse.token);
        this.router.navigate(['admin/dashboard']);
      }
    })
  }
}
