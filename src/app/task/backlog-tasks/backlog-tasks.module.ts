import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BacklogTasksComponent } from './backlog-tasks.component';
import { LogService } from '../../shared/log.service';

@NgModule({
  declarations: [
    BacklogTasksComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [BacklogTasksComponent],
 // providers: [CoursesServices]
})
export class BacklogTasksModule { }
