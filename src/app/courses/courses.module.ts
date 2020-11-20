import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CoursesComponent } from './courses.component';
import { CoursesServices } from '../courses/courses.services';
import { LogService } from '../shared/log.service';

@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CoursesComponent],
  // providers: [CoursesServices]
})
export class CoursesModule { }
