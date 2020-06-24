import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm;

  constructor(private formBuilder : FormBuilder, private http : HttpClient) { 

    this.registerForm = this.formBuilder.group(
      {
        username: '',
        email: '',
        password: ''
      });

  }

  ngOnInit(): void {
  }

  onSubmit(userdata: { username: string; email: string; password: string }){
    this.http.post('http://localhost:3000/auth/register', userdata)
    .subscribe(responseData => {
      console.log(responseData);
    });
  }

}
