import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../coreApp/services/auth-service/auth.service';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent implements OnInit {

  form: FormGroup;
  private formSubmitAttempt: boolean;
  isLoading: boolean = false;
  errorMgs: string = null;

  // password view
  iconToggle: boolean = false;
  passwordToggleIcon: string = 'fas fa-eye';
  passViewer: string = 'password';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.createLoginForm();
    this.isLoadingStatus();
    this.isMessStatus();
  }
  createLoginForm(): void {
    this.form = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  isFieldInvalid(field: string) {
    return (
      (!this.form.get(field).valid && this.form.get(field).touched) ||
      (this.form.get(field).untouched && this.formSubmitAttempt)
    );
  }
  onSubmit() {
    if (this.form.valid) {
      this.authService.obtainAccessToken(this.form.value);
    }
    this.formSubmitAttempt = true;
  }
  isLoadingStatus(): void {
    this.authService.loadingStatus().subscribe(isLoading => this.isLoading = isLoading);
  }

  isMessStatus(): void {
    this.authService.messStatus().subscribe(errorMgs => this.errorMgs = errorMgs);
  }

  clearErrorMg() {
    this.errorMgs = null;
  }

  get password() {
    return this.form.get('password');
  }

  passwordViewToggle() {
    if (this.password.value) {
      if (!this.iconToggle) {
        this.passwordToggleIcon = 'fas fa-eye-slash'
        this.passViewer = 'text';
      } else {
        this.passwordToggleIcon = 'fas fa-eye';
        this.passViewer = 'password';
      }
      this.iconToggle = !this.iconToggle;
    } else {
      console.log('no password!');
    }
  }

  
}
