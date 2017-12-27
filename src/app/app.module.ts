import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CoursesComponent } from './component/courses/courses.component';
import {CoursesService} from './service/courses.service';
import { SummaryPipe } from './summary.pipe';
import { StarsComponent } from './component/stars/stars.component';
import { CasePipe } from './case.pipe';
import { PanelComponent } from './component/panel/panel.component';
import { LikeComponent } from './component/like/like.component';
import { NgforHomeComponent } from './component/ngfor-home/ngfor-home.component';
import { TaskComponent } from './component/task/task.component';
import { InputFormatDirective } from './directive/input-format.directive';
import { InputFormatComponent } from './component/input-format/input-format.component';
import { ZippyComponent } from './component/zippy/zippy.component';
import { ContactFormComponent } from './component/contact-form/contact-form.component';
import { FormExerciseComponent } from './component/form-exercise/form-exercise.component';
import { SignupFormComponent } from './component/signup-form/signup-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';


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
    NgforHomeComponent,
    TaskComponent,
    InputFormatDirective,
    InputFormatComponent,
    ZippyComponent,
    ContactFormComponent,
    FormExerciseComponent,
    NewCourseFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
