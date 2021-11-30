import { Component, OnInit } from '@angular/core';
import { BASE_URL } from 'src/app/config/url.config';
import { AlertService } from 'src/app/services/alert.service';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-lupa-password',
  templateUrl: './lupa-password.component.html',
  styleUrls: ['./lupa-password.component.scss'],
})
export class LupaPasswordComponent implements OnInit {
  email: any;
  isSubmitDisabled = true;

  constructor(private http: HttpService, private alerSvc: AlertService) {}

  ngOnInit(): void {}

  checkEmail() {
    if (!this.email) {
      this.alerSvc.error('Harap masukkan email anda!');
      return;
    }

    this.http
      .get(
        BASE_URL._BASE_AUTHSERVICE +
          'get-validasi-email-to-user-id?email=' +
          this.email
      )
      .subscribe((res: any) => {
        this.isSubmitDisabled = res.data === null;

        if (!res.data) this.alerSvc.warning('Email tidak terdaftar');
      });
  }

  submit() {
    // ocalhost:6776/auth-registrasi-service/get-send-email-reset-password?email=eonekasan@gmail.com
    this.http
      .get(
        BASE_URL._BASE_AUTHSERVICE +
          'get-send-email-reset-password?email=' +
          this.email
      )
      .subscribe((res: any) => {
        this.alerSvc.info("Silahkan cek email anda untuk verifikasi Reset Password");
        this.reset();
      });
  }


  reset() {
    this.isSubmitDisabled = true;
    this.email = null;
  }
}
