import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  name:String='';
  surname:String='';
  password:String='';
  confirmPassword:String='';
  gender:String='';
  email:String='';
  cell:String='';
  question:String='';
  answer:String='';

 questions: string[] = ['What is your ID number?', 'what year did you finish school?'];
 registerUser: any[] = [];
  constructor(private router: Router) {
  
  }

  ngOnInit(): void {
   
   
  }

  register() {
    for(let i = 0; i < this.registerUser.length; i++){
      if (this.registerUser[i].email === this.email){
        console.log("This User already exists");
      } 
    }
    //console.log(this.name, this.surname, this.password, this.confirmPassword, this.gender, this.email, this.cell, this.question, this.answer);
    if (this.name === '' || this.surname === '' || this.password === '' || this.confirmPassword === '' || this.gender === '' || this.email === '' || this.cell === '' || this.question === '' || this.answer === '') {
      alert('Please fill in ALL fields!');
    }else{
      let user ={
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
      this.router.navigate(['/login']);
      
  
  
  } 
}
}
