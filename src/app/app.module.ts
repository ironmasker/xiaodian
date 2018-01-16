import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { CoursesComponent } from './component/courses/courses.component';
import {CoursesService} from './service/courses.service';
import { SummaryPipe } from './summary.pipe';
import { StarsComponent } from './component/stars/stars.component';
import { CasePipe } from './case.pipe';
import { PanelComponent } from './component/panel/panel.component';
import { LikeComponent } from './component/like/like.component';
import { MapListComponent } from './component/map-list/map-list.component';
import { NgforComponent } from './component/ngfor/ngfor.component';
import { NgforHomeComponent } from './component/ngfor-home/ngfor-home.component';
import { TaskComponent } from './component/task/task.component';
import { InputFormatDirective } from './directive/input-format.directive';
import { InputFormatComponent } from './component/input-format/input-format.component';
import { ZippyComponent } from './component/zippy/zippy.component';
import { ContactFormComponent } from './component/contact-form/contact-form.component';
import { FormExerciseComponent } from './component/form-exercise/form-exercise.component';
import { SignupFormComponent } from './component/signup-form/signup-form.component';
import { NewCourseFormComponent } from './component/new-course-form/new-course-form.component';
import { ReactiveFormExerciseComponent } from './component/reactive-form-exercise/reactive-form-exercise.component';
import { PostsComponent } from './component/posts/posts.component';
import { PostService } from './service/post.service';
import { ErrorHandler } from '@angular/core';
import { AppErrorHandler } from './exception/app-error-handler';
import { GithubFollowersComponent } from './component/github-followers/github-followers.component';
import { GithubFollowersService } from './service/github-followers.service';
import { HomeComponent } from './component/home/home.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { GithubProfileComponent } from './component/github-profile/github-profile.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { ArchiveComponent } from './component/archive/archive.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    CoursesComponent,
    SummaryPipe,
    StarsComponent,
    CasePipe,
    PanelComponent,
    LikeComponent,
    MapListComponent,
    NgforComponent,
    NgforHomeComponent,
    TaskComponent,
    InputFormatDirective,
    InputFormatComponent,
    ZippyComponent,
    ContactFormComponent,
    FormExerciseComponent,
    NewCourseFormComponent,
    ReactiveFormExerciseComponent,
    PostsComponent,
    GithubFollowersComponent,
    HomeComponent,
    NotFoundComponent,
    GithubProfileComponent,
    NavbarComponent,
    HomePageComponent,
    ArchiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      // { path:'', component: HomeComponent },
      // { path:'followers/:id/:username', component: GithubProfileComponent },
      // { path:'followers', component: GithubFollowersComponent },
      // { path:'posts', component: PostsComponent },
      { path: '', component: HomePageComponent },
      { path: 'archive/:year/:month', component: ArchiveComponent },
      { path:'**', component: NotFoundComponent }
    ])
  ],
  providers: [
    CoursesService,
    PostService,
    GithubFollowersService,
    {
      provide: ErrorHandler, useClass: AppErrorHandler
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }