import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
  }
  
  user: any[] = [];
  loginUser ={
  email: String,
  password: String
}
login(){
  this.user.push(this.loginUser);
  localStorage.setItem('user', JSON.stringify(this.user));
}
  

}
