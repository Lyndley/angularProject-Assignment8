import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  registerUser: any[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.registerUser = JSON.parse(localStorage.getItem('registerUser') || '[]');
  }

  login() {
    let userExists = false;
    for(let i = 0; i < this.registerUser.length; i++){
      if (this.registerUser[i].email === this.email && this.registerUser[i].password === this.password){
        userExists = true;
        break;
      } 
    }
    if (userExists) {
      alert('Login successful!');
      this.router.navigate(['/home']);
    } else {
      alert('User not found! Please register.');
      this.router.navigate(['/register']);
    }
  }
}
