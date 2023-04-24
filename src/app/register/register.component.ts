import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  name: string = '';
  surname: string = '';
  password: string = '';
  confirmPassword: string = '';
  gender: string = '';
  email: string = '';
  cell: string = '';
  question: string = '';
  answer: string = '';
 
  constructor() {
    
  }

  ngOnInit(): void {
    let storedUsers = localStorage.getItem('registerUser');
    if (storedUsers) {
      this.registerUser = JSON.parse(storedUsers);
    } else {
      this.registerUser = [];
    }
  }

  questions: string[] = ['What is your ID number?', 'what year did you finish school?'];
  registerUser: any[] = [];

  register() {
    for(let i = 0; i < this.registerUser.length; i++){
      if (this.registerUser[i].email === this.email){
        alert("This User already exists");
        return;
      }
    }
    //if (!this.name || !this.surname || !this.password || !this.confirmPassword || !this.gender || !this.email || !this.cell || !this.question || !this.answer) {
      //alert("Please fill in ALL fields!");
     {
      let user = {
        name: this.name,
        surname: this.surname,
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword,
        cell: this.cell,
        question: this.question,
        answer: this.answer,
        gender: this.gender,
      };
      this.registerUser.push(user);
      localStorage.setItem('registerUser', JSON.stringify(this.registerUser));
      alert("Registration successful!");
      this.directToLogin();
    }
  }

  directToLogin(){
    document.location.href = "http://localhost:4200/login"
  }
}
