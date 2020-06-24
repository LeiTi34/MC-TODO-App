import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm;

  constructor(private formBuilder: FormBuilder, private http : HttpClient) { 

    this.loginForm = this.formBuilder.group(
      {
        username: '',
        password: '',
        rememberme: ''
      });
  }

  ngOnInit(): void {
  }

  onSubmit(userdata){
    this.http.post('http://localhost:3000/auth/login', userdata)
      .subscribe(responseData => {
        console.log(responseData);
      });
  }
}
