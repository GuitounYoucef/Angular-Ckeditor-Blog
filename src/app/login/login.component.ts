import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/User';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User =new User();

  constructor(private loginservice:LoginService, private router:Router) {
    this.user={
      username:'',
      password:''
    }
   }

  ngOnInit(): void {
  }
  onSubmit(){
    this.login(); 
 
  }
  login(){
    this.loginservice.Login(this.user).subscribe(data =>
      {console.log(data);
        this.router.navigate(['/home'])
         } 
      );
}
}
