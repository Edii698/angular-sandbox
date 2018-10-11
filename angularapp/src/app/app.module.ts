import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { UserComponent } from "./component/user/user.component";
import { UsersComponent } from "./component/users/users.component";
import { NavbarComponent } from "./component/navbar/navbar.component";
import { UserService } from "./service/user.service";
import { PostService } from "./service/post.service";
import { PostsComponent } from "./component/posts/posts.component";
import { PostFormComponent } from "./component/post-form/post-form.component";
import { AppRpoutingModule } from ".//app-rpouting.module";
import { HomeComponent } from "./component/home/home.component";
import { PostComponent } from './component/post/post.component';
import { NotFoundComponent } from './component/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UsersComponent,
    NavbarComponent,
    PostsComponent,
    PostFormComponent,
    HomeComponent,
    PostComponent,
    NotFoundComponent
  ],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRpoutingModule],
  providers: [UserService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule {}
