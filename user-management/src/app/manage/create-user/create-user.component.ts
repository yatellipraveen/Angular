import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { HttpService } from 'src/app/http.service';
import { constants } from '../../constants';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent implements OnInit {
  const;

  userForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    login: new FormControl('', Validators.required),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(7),
    ]),
    age: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
      Validators.maxLength(2),
    ]),
  });

  constructor(private http: HttpService) {}

  ngOnInit() {
    this.const = constants;
  }
  onSubmit() {
    this.http.createNewUser(this.userForm.value);
    this.userForm.reset();
  }
}
