import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-connexion-user',
  templateUrl: './connexion-user.component.html',
  styleUrls: ['./connexion-user.component.scss']
})
export class ConnexionUserComponent implements OnInit {
  state: string = "login";
  showPasswordLogin: boolean = false;
  showNewPasswordReset: boolean = false;
  showConfirmPasswordReset: boolean = false;
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    rememberMe: new FormControl(false)
  });
  forgotPasswordForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  resetPasswordForm = new FormGroup({
    newPassword: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
  }, {validators: this.passwordMatchValidator});

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.setCredentials();
  }

  resetPassword() {
    this.state = "forgotPassword";
  }

  BackToLogin() {
    this.state = "login";
  }

  sendRequest() {
    this.state = "resetPassword";
  }

  login() {
    if (this.loginForm.valid && this.loginForm.controls['rememberMe'].value) {
      this.saveCredentials(this.loginForm.controls['username'].value, this.loginForm.controls['password'].value);
    }
    if (this.loginForm.valid && !this.loginForm.controls['rememberMe'].value) {
      this.removeCredentials();
    }
    this.router.navigateByUrl("home").then(r => {
    });
  }

  setCredentials() {
    if (localStorage.getItem("username") !== null) {
      this.loginForm.controls['username'].setValue(localStorage.getItem("username"));
    }
    if (localStorage.getItem("password") !== null) {
      this.loginForm.controls['password'].setValue(localStorage.getItem("password"));
    }
  }

  saveCredentials(username: string, password: string) {
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  }

  removeCredentials() {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }

  handlePasswordLoginDisplay(value: boolean) {
    this.showPasswordLogin = value;
  }

  handleNewPasswordResetDisplay(value: boolean) {
    this.showNewPasswordReset = value;
  }

  handleConfirmPasswordReset(value: boolean) {
    this.showConfirmPasswordReset = value;
  }

  passwordMatchValidator(control: AbstractControl) {
    const newPassword = control.get('newPassword')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    return newPassword === confirmPassword ? null : {passwordMismatch: true};
  }

  preventDefault(event: ClipboardEvent) {
    event.preventDefault();
  }

}
