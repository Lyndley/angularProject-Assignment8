import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
   user={
  name:'',
  surname:'',
  password:'',
  confirmPassword:'',
  gender:'',
  email:'',
  cell:'',
  question:'',
  answer:'',
  }
  loginUser={
    email: '',
    password: '',
  }
  constructor() { }
}
