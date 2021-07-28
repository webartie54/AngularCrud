import { Component, OnInit, Inject } from '@angular/core';
import { Router } from "@angular/router";
import { User } from "../../model/user";
import { ApiService } from "../../services/api.service";

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  users: User[] = [];

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {    
    this.apiService.getUsers()
      .subscribe(data => {        
        this.users = data;
        console.log(this.users)
      });
  }

  deleteUser(user: User): void {
    this.apiService.deleteUser(user.Id)
      .subscribe(data => {
        this.users = this.users.filter(u => u !== user);
      })
  };

  editUser(user: User): void {
    window.localStorage.removeItem("editUserId");
    window.localStorage.setItem("editUserId", user.Id.toString());
    this.router.navigate(['edit-user']);
  };

  addUser(): void {
    this.router.navigate(['add-user']);
  };
}
