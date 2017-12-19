import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CoursesComponent } from './component/courses/courses.component';
import {CoursesService} from './service/courses.service';
import { SummaryPipe } from './summary.pipe';
import { StarsComponent } from './component/stars/stars.component';
import { CasePipe } from './case.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    SummaryPipe,
    StarsComponent,
    CasePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
