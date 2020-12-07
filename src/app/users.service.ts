import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";

export interface IUserEntity {
  id: number;
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private id = 0;
  private users: IUserEntity[] = [];

  constructor() { }

  getAllUsers(): Observable<IUserEntity[]> {
    return of(this.users);
  }

  getUserById(id: number): Observable<IUserEntity> {
    let user: IUserEntity;
    for(const u of this.users) {
      if(id === u.id) {
        user = u;
        break;
      }
    }
    return of(user);
  }

  create(newUsername: string, newPassword: string): Observable<IUserEntity> {
    const newUser: IUserEntity = {id: this.id, username: newUsername, password: newPassword};

    if(this.users.find(u => u.username === newUsername)) {
      alert('user already exists!');
    } else {
      this.id++;
      this.users.push(newUser);
      return of(newUser);
    }
  }
}
