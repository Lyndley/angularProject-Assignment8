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
  users: any[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    let storedUsers = localStorage.getItem('registerUser');
    if (storedUsers) {
      this.users = JSON.parse(storedUsers);
    }
  }

  login() {
    let userExists = false;
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].email === this.email && this.users[i].password === this.password) {
        userExists = true;
        alert('Login Successful');
        this.router.navigate(['./home']);
        return;
      }
    }
    if (!userExists) {
      alert('User does not exist');
      this.router.navigate(['./register']);
    }
  }
  
}
