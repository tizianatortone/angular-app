import { GithubFollowersService } from './services/github-followers.service';
import { DataService, API_URL } from './services/data.service';
import { AppErrorHandler } from './common/app-error-handler';
import { PostService } from './services/post.service';
import { SummaryPipe } from './summary.pipe';
import { AuthorsComponent } from './authors.component';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthorsService } from './services/authors.service';
import { FavouriteComponent } from './favourite/favourite.component';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { PostsComponent } from './posts/posts.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    AuthorsComponent,
    SummaryPipe,
    FavouriteComponent,
    PanelComponent,
    LikeComponent,
    InputFormatDirective,
    ZippyComponent,
    ContactFormComponent,
    NewCourseFormComponent,
    ChangePasswordComponent,
    PostsComponent,
    GithubFollowersComponent,
    NavbarComponent,
    HomeComponent,
    GithubProfileComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'followers/:id/:username',
        component: GithubProfileComponent,
      },
      {
        path: 'followers',
        component: GithubFollowersComponent,
      },
      {
        path: 'posts',
        component: PostsComponent,
      },
      {
        path: '**',
        component: NotFoundComponent,
      },
    ]),
  ],
  providers: [
    AuthorsService,
    PostService,
    { provide: ErrorHandler, useClass: AppErrorHandler },
    {
      provide: API_URL,
      useValue: 'https://jsonplaceholder.typicode.com/posts',
    },
    DataService,
    GithubFollowersService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
