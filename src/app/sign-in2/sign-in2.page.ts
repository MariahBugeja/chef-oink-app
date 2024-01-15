import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in2',
  templateUrl: './sign-in2.page.html',
  styleUrls: ['./sign-in2.page.scss'],
})
export class SignIn2Page {
  Email: string = '';
  Password: string = '';
  ConfirmPassword: string = '';
  passwordMatchError: boolean = false;
  passwordStrengthError: boolean = false;
  invalidEmailError: boolean = false;
  error: string = '';

  constructor(private router: Router) {}

  signIn2() {
    // Reset error messages and flags before validation
    this.error = '';
    this.invalidEmailError = false;
    this.passwordMatchError = false;
    this.passwordStrengthError = false;

    if (!this.Email || !this.Password || !this.ConfirmPassword) {
      this.error = 'Please fill in all fields.';
      return;
    }

    // Email validation
    if (!this.validateEmail(this.Email)) {
      this.invalidEmailError = true;
      this.error = 'Please enter a valid email address.';
      return;
    }
// password validation
    if (this.Password !== this.ConfirmPassword) {
      this.passwordMatchError = true;
      this.error = 'Passwords do not match';
      return;
    }
// password strength validation
    if (
      this.Password.length < 8 ||
      !/[a-z]/.test(this.Password) ||
      !/[A-Z]/.test(this.Password) ||
      !/\d/.test(this.Password)
    ) {
      this.passwordStrengthError = true;
      this.error =
        'Your password needs to be at least 8 characters long and include lowercase letters, uppercase letters, and numbers.';
      return;
    }

    this.router.navigate(['/login']);
  }

  validateEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}
