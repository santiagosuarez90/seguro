import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import { ErrorStateMatcher } from '@angular/material/core';
import { Cookie } from 'ng2-cookies';
import { Router } from '@angular/router';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  hide = true;
  showAlert = false;

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

  formLogin: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    if (Cookie.check('id_token')){
      this.router.navigate(['/claims/wizard']);
    }
  }

  matcher = new MyErrorStateMatcher();

  ngOnInit() {
    this.formLogin = this.formBuilder.group({
      user: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      rememberMe: new FormControl('', Validators.email),
    });
  }

  onSubmit() {
    this.showAlert = false;

    if (this.formLogin.valid) {
      if(this.formLogin.get('user').value == '1801821388' && this.formLogin.get('password').value == 'Seguros2022'){
        this.saveToken('sdfsdfsdf3213132fdfsd21');
        this.router.navigate(['claims/wizard']);
      }else{
        this.showAlert = true;
        this.formLogin.patchValue({ password: '' });
      }
    }

  }

  saveToken(token) {
    if (!!token) {
      Cookie.set('access_token', token.accessToken);
      Cookie.set('refresh_token', token.refreshToken);
      Cookie.set('data_user', JSON.stringify(token.client_data));
      Cookie.set('id_token', token.idToken);
      // Cookie.set('id_token', 'eyJraWQiOiJDNEsxSWNLY0dHOWE5WElIRGZTaVgxNVBZbnVpcHgxeUFmWXI1czNXczhrPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIwNDMxM2E2MS1kY2E0LTRjMWYtYjUxOS05YzBiNGIzZGY3YmEiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLXdlc3QtMi5hbWF6b25hd3MuY29tXC91cy13ZXN0LTJfcTBoS3M5Z0RMIiwiY29nbml0bzp1c2VybmFtZSI6IjA0MzEzYTYxLWRjYTQtNGMxZi1iNTE5LTljMGI0YjNkZjdiYSIsImF1ZCI6IjVvMzB1YjgyaTBoa3JuMTVsOWxhb2R1ZG5tIiwiZXZlbnRfaWQiOiIyMTNhYTVjNS0yYWYwLTExZTktOTU3OS0zYjI3NTkyNjdiOGEiLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTU0OTU1NDY0NSwibmFtZSI6ImRhdmlkIiwicGhvbmVfbnVtYmVyIjoiKzU5MzA5OTA2ODY1MDgiLCJleHAiOjE1NDk1NTgyNDUsImlhdCI6MTU0OTU1NDY0NSwiZmFtaWx5X25hbWUiOiJxdWlsdW1iYSIsImVtYWlsIjoiaGRhdmlkMjM5MUBsaXZlLmNvbSJ9.m6X0UI9eBd1AR4qA2R_3iUAqFiIvh-y3kozppDMQArJYUDZKnFpYtIXTHdIQSub6bTe_wMb0rKdWPaV2wVuBZBG_e3UweZQyIrIaJMRVmCI439Q2hORVjsGaa_Amoku0s6Lj-ybe2oN32rBnatxHvKtxrZEr6w0to1abUamE2fHg8FW9pFXWP9StyPPbSWj-8GETtk7_tA02Ogn3AA-QqBz4XT7ZCZLH6fngqW6xmI0DFNqyg92V5zR-gJd5zabUFE2tgEHkzKhomDGQ3tIk9KDOT0YWY3xvcokjQ4ElAW3JWSmTCQJUEguO07DsNfzX4nZD1-m9WtW2zqMElQSuKw');
    }
  }

}
