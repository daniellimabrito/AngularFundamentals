import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateCourseModule } from './create-course/create-course.module';
import { CoursesModule } from './courses/courses.module';
import { CoursesServices } from './courses/courses.services';
import { LogService } from './shared/log.service';
import { CreateTaskModule } from './task/create-task/create-task.module';
import { BacklogTasksModule } from './task/backlog-tasks/backlog-tasks.module';
import { DevelopmentTasksModule } from './task/development-tasks/development-tasks.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoursesModule,
    CreateCourseModule,
    CreateTaskModule,
    BacklogTasksModule,
    DevelopmentTasksModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
//  providers: [CoursesServices],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
