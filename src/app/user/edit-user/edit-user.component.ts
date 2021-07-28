import { Component, OnInit, Inject } from '@angular/core';
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";
import { User } from "../../model/user";
import { ApiService } from "../../services/api.service";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user: User;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    let userId = window.localStorage.getItem("editUserId");
    if (!userId) {
      alert("Invalid action.")
      this.router.navigate(['list-user']);
      return;
    }
    this.editForm = this.formBuilder.group({
      Id: [''],      
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      Age: ['', Validators.required],
      Salary: ['', Validators.required]
    });
    this.apiService.getUserById(+userId)
      .subscribe(data => {
        console.log(data)
        this.editForm.setValue(data);
      });
  }

  onSubmit() {
    this.apiService.updateUser(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {          
          if (data!=null  && data.status === 200) {
            this.router.navigate(['list-user']);
          } else {
            console.log(data);
            this.router.navigate(['list-user']);
          }
        },
        error => {
          console.log(error)
        });
  }

}