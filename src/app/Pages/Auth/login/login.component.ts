import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  slideConfig = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '0',
    slidesToShow: 1,
    speed: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed : 3000
  };

  formLogin = new FormGroup({
    user: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    rememberMe: new FormControl('', Validators.email),
  });

  constructor() {
  }

  ngOnInit() {
  }

  handleValidSubmit() {
    console.log(this.formLogin.value);
  }

  handleReset() {
    this.formLogin.reset();
  }

  slickInit(e: any) {
    console.log('slick initialized');
  }

  breakpoint(e: any) {
    console.log('breakpoint');
  }

}
