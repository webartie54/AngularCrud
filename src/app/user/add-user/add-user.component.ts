import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ApiService } from "../../services/api.service";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private apiService: ApiService) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      Age: ['', Validators.required],
      Salary: ['', Validators.required]
    });

  }

  onSubmit() {
    this.apiService.createUser(this.addForm.value)
      .subscribe(data => {
        this.router.navigate(['list-user']);
      });
  }

}