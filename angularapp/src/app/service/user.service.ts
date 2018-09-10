import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { of } from "rxjs";

import { User } from "../models/Users";

@Injectable({
  providedIn: "root"
})
export class UserService {
  users: User[];
  data: Observable<any>;

  constructor() {
    this.users = [
      {
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@gmail.com",
        isActive: true,
        registered: new Date("01/02/2018 08:30:00"),
        hide: true
      },
      {
        firstName: "Edwin",
        lastName: "Otero",
        email: "e.otero81@gmail.com",
        isActive: false,
        registered: new Date("03/11/2017 06:30:00"),
        hide: true
      },
      {
        firstName: "Sophya",
        lastName: "Chanthavong",
        email: "sophy.c3@yahoo.com",
        isActive: true,
        registered: new Date("06/04/2016 10:30:00"),
        hide: true
      }
    ];
  }

  getData() {
    this.data = new Observable(observer => {
      setTimeout(() => {
        observer.next(1);
      }, 1000);

      setTimeout(() => {
        observer.next(2);
      }, 2000);

      setTimeout(() => {
        observer.next(3);
      }, 3000);

      setTimeout(() => {
        observer.next(4);
      }, 4000);
    });

    return this.data;
  }

  getUsers(): Observable<User[]> {
    console.log("fetching users from service");
    return of(this.users);
  }

  addUser(user: User) {
    this.users.unshift(user);
  }
}
