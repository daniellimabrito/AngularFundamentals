import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CreateTaskComponent } from './create-task.component';
import { LogService } from '../../shared/log.service';

@NgModule({
  declarations: [
    CreateTaskComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [CreateTaskComponent],
 // providers: [CoursesServices]
})
export class CreateTaskModule { }
