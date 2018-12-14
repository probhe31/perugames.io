import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { UserToken } from 'src/app/models/user-token';
import { Subscription } from 'rxjs';
import { OnLoginAnnounceService } from 'src/app/services/on-login-announced.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  
  //@Output() onUserLogin = new EventEmitter<{text: string}>();
  loginForm : FormGroup;
  userToken : UserToken; 

  subscription: Subscription;

  constructor(private onLoginAnnounceService:OnLoginAnnounceService, 
    private route: ActivatedRoute, private router: Router, 
    private userService : UserService, private formBuilder:FormBuilder) 
  {
  
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'username':[null,Validators.required],
      'password':[null,Validators.required]    
    });

  }

  
  onFormSubmit(form:NgForm) {
    this.userService.loginUser(form)
      .subscribe(res => {
          this.userToken = res;
          console.log("username " + form["username"]);
          localStorage.setItem("token", this.userToken.token);
          localStorage.setItem("nickname", form["username"]);
          this.onLoginAnnounceService.loginComplete(form["username"]);
          this.router.navigate(['/home']);

        }, (err) => {
          console.log(err);          
        });
  }

}
