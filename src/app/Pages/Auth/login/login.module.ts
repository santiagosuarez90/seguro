import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MatInputModule } from '@angular/material/input';
import { LoginRoutingModule } from "./login-routing.module";
import { LoginComponent } from "./login.component";
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LoginRoutingModule,
    SlickCarouselModule,
    MatInputModule,
    MatIconModule,
  ],
  declarations: [LoginComponent],
  providers: []
})
export class LoginModule { }
