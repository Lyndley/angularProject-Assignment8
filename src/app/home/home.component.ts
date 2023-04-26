import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users: any[] =[];
  loggedUser:any;

  constructor() { }

  ngOnInit(): void {
    this.loggedUser=localStorage.getItem("loggedUser")
    const users= JSON.parse(localStorage.getItem("users") || "[]");
    this.users=users;
    console.log(this.users)
  }

}
