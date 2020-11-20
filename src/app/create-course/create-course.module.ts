import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CreateCourseComponent } from './create-course.component';
import { CoursesServices } from '../courses/courses.services';
import { GetCreatedCourseComponent } from '../get-created-course/get-created-course.component';
import { LogService } from '../shared/log.service';

@NgModule({
  declarations: [
    CreateCourseComponent,
    GetCreatedCourseComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CreateCourseComponent],
 // providers: [CoursesServices]
})
export class CreateCourseModule { }
