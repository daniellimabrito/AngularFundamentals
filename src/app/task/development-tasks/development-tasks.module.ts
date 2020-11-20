import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DevelopmentTasksComponent } from './development-tasks.component';
import { LogService } from '../../shared/log.service';

@NgModule({
  declarations: [
    DevelopmentTasksComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [DevelopmentTasksComponent],
 // providers: [CoursesServices]
})
export class DevelopmentTasksModule { }
