import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {UserService} from '../../../services/user.service.client';
import { User } from '../../../models/user.model.client';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hello: String = 'Hello from component';
  username: string;
  password: string;
  constructor(public userService: UserService,
              private router: Router) { }

  ngOnInit() {
  }
  login(username: string , password: string) {
    const user: User = this.userService.findUserByCredentials(username, password);
    if (user) {
      this.router.navigate(['/profile/', user._id]);
    }
  }
}
