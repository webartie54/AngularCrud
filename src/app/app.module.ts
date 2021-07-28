import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListUserComponent } from './user/list-user/list-user.component';
// import { LoginComponent } from './login/login.component';
// import { AddUserComponent } from './user/add-user/add-user.component';
// import { EditUserComponent } from './user/edit-user/edit-user.component';
import { routing } from "./app-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { ApiService } from "./services/api.service";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { AddUserComponent } from './user/add-user/add-user.component';


@NgModule({
  declarations: [
    AppComponent,
    ListUserComponent,
    EditUserComponent,
    AddUserComponent,
    // LoginComponent,
    // AddUserComponent,
    // EditUserComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }