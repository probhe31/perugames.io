import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm : FormGroup;

  constructor(private userService : UserService, private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      'username':[null,Validators.required],
      'password':[null,Validators.required],
      'sex':[null,Validators.required]      
    });

  }

  onFormSubmit(form:NgForm) {
    this.userService.addUser(form)
      .subscribe(res => {
          let id = res['_id'];
        }, (err) => {
          console.log(err);          
        });
  }



}
