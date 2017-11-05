import {User} from '../models/user.model.client';
import {Injectable} from '@angular/core';

@Injectable()
export class UserService {
  users: User[] = [
  new User('111', 'alice' , '123'),
    new User('222', 'bob' , '456'),
    new User('333', 'charlie' , '789')
  ] ;
  findUserByCredentials (username, password) {
    return this.users.find(function(user){
      return user.username === username &&
      user.password === password;

    });
  }
  findUserByID(userId) {
    return this.users.find(function(user){
      return user._id === userId;
    });
  }
}

