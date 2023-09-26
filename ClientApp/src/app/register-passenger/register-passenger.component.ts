import { Component, OnInit } from '@angular/core';
import { PassengerService } from '../api/services';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-register-passenger',
  templateUrl: './register-passenger.component.html',
  styleUrls: ['./register-passenger.component.css'],
})
export class RegisterPassengerComponent implements OnInit {
  constructor(
    private passengerService: PassengerService,
    private authService: AuthService,
    private fb: FormBuilder
  ) {}

  form = this.fb.group({
    email: [''],
    firstName: [''],
    lastName: [''],
    isFemale: [true],
  });

  ngOnInit(): void {}

  checkPassenger(): void {
    const params = { email: this.form.get('email')!.value ?? '' };

    this.passengerService.findPassenger(params).subscribe((_) => {
      console.log('Passenger exits');
      this.Login();
    });
  }

  register() {
    console.log('FORM VALUES: ', this.form.value);
    this.passengerService
      .registerPassenger({ body: this.form.value })
      .subscribe((_) => {
        console.log('Form data posted to server!');
        this.Login();
      });
  }

  private Login() {
    this.authService.loginUser({
      email: this.form.get('email')?.value ?? '',
    });
  }
}
