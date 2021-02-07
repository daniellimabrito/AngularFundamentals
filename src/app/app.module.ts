import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateCourseModule } from './create-course/create-course.module';
import { CoursesModule } from './courses/courses.module';
import { CoursesServices } from './courses/courses.services';
import { LogService } from './shared/log.service';
import { CreateTaskModule } from './task/create-task/create-task.module';
import { BacklogTasksModule } from './task/backlog-tasks/backlog-tasks.module';
import { DevelopmentTasksModule } from './task/development-tasks/development-tasks.module';
import { DoneTasksModule } from './task/done-tasks/done-tasks.module';
import { QuillEditorComponent } from './quill-editor/quill-editor.component';
import { QuillModule } from 'ngx-quill'
import { CommonModule } from '@angular/common';
import { TestFormComponent } from './test-form/test-form.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
//import { MatMomentDateModule } from "@angular/material-moment-adapter";



@NgModule({
  declarations: [		
    AppComponent,
      QuillEditorComponent,
      TestFormComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    CoursesModule,
    CreateCourseModule,
    CreateTaskModule,
    BacklogTasksModule,
    DevelopmentTasksModule,
    DoneTasksModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    CommonModule,
    QuillModule.forRoot(),
    MatDatepickerModule,
    MatNativeDateModule, 
   // MatMomentDateModule,
  ],
//  providers: [CoursesServices],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
