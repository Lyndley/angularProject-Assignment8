import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
 user:any={}
  constructor(private userService: UserService) {
  
    
  }

  ngOnInit(): void {
    console.log("object from service",this.userService)
    this.user= this.userService
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
      if (this.registerUser[i].email === ""){
        alert("This User already exists");
      }
    }
    //if (!this.name || !this.surname || !this.password || !this.confirmPassword || !this.gender || !this.email || !this.cell || !this.question || !this.answer) {
      //alert("Please fill in ALL fields!");
     {
      
      this.registerUser.push(this.userService);
      localStorage.setItem('registerUser', JSON.stringify(this.registerUser));
      alert("Registration successful!");
      this.directToLogin();
    }
  }

  directToLogin(){
    document.location.href = "http://localhost:4200/login"
  }
}
