import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DoneTasksComponent } from './done-tasks.component';
import { LogService } from '../../shared/log.service';

@NgModule({
  declarations: [
    DoneTasksComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [DoneTasksComponent],
 // providers: [CoursesServices]
})
export class DoneTasksModule { }
