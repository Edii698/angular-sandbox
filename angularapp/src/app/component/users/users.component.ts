import { Component, OnInit, ViewChild } from "@angular/core";
import { UserService } from "../../service/user.service";
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
  data: any;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getData().subscribe(data => {
      console.log(data);
    });

    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
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

      // this.users.unshift(value);
      this.userService.addUser(value);

      this.form.reset();
    }
  }
}
