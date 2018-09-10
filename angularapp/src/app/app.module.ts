import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { UserComponent } from "./component/user/user.component";
import { UsersComponent } from "./component/users/users.component";
import { NavbarComponent } from "./component/navbar/navbar.component";
import { UserService } from "./service/user.service";

@NgModule({
  declarations: [AppComponent, UserComponent, UsersComponent, NavbarComponent],
  imports: [BrowserModule, FormsModule],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
