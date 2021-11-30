import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { BASE_URL } from 'src/app/config/url.config';
import { AlertService } from 'src/app/services/alert.service';
import { HttpService } from 'src/app/services/http.service';
import { MediaBreakpointService } from 'src/app/services/media-breakpoint.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  showPassword = false;
  kataSandi: any;
  email: any;

  media: any;

  constructor(
    private http: HttpService,
    private toastr: AlertService,
    private cookieSvc: CookieService,
    private mdbpService: MediaBreakpointService
  ) {}

  ngOnInit(): void {
    this.media = this.mdbpService.getMedia();
  }
  
  getInputType() {
    if (this.showPassword) {
      return 'text';
    }
    return 'password';
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }

  signin() {
    if (!this.email) {
      this.toastr.warning('Harap isi Nama Pengguna terlebih dahulu!');
      return;
    }

    if (!this.kataSandi) {
      this.toastr.warning('Harap isi Kata Sandi terlebih dahulu!');
      return;
    }

    let dataLogin = {
      email: this.email,
      password: this.kataSandi,
    };

    
    this.http
      .save(BASE_URL._BASE_AUTHSERVICE + 'signin', dataLogin)
      .subscribe(
        (res: any) => {
          this.cookieSvc.set('token', res.token);
          this.cookieSvc.set('dataLogin', JSON.stringify(res.user));

          window.location.replace('/central-app');
        },
        (err) => {
          this.toastr.warning('Kombinasi Nama Pengguna dan Password Salah !');
        }
      );
  }
}
