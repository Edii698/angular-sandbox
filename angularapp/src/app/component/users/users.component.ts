import { Component, OnInit, ViewChild } from "@angular/core";

import { User } from "../../models/Users";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: "",
    lastName: "",
    email: ""
  };
  users: User[];
  showExtended: boolean = true;
  enableAdd: boolean = false;
  showUserForm: boolean = false;
  @ViewChild("userForm")
  form: any;

  constructor() {}

  ngOnInit() {
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

  // addUser() {
  //   this.user.isActive = true;
  //   this.user.registered = new Date();
  //   this.users.unshift(this.user);

  //   this.user = {
  //     firstName: "",
  //     lastName: "",
  //     email: ""
  //   };
  // }

  onSubmit({ value, valid }: { value: User; valid: boolean }) {
    if (!valid) {
      console.log("form is not valid");
    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;

      this.users.unshift(value);

      this.form.reset();
    }
  }
}
