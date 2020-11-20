import { Component, OnInit } from '@angular/core';
import { CoursesServices } from './courses.services';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  providers: [CoursesServices]
})
export class CoursesComponent implements OnInit {

  courses: string[] = [];
  constructor(private coursesService: CoursesServices) { }

  ngOnInit() {

    this.courses = this.coursesService.getCourses();
    CoursesServices.createdNewCourse.subscribe(
      response => {
        return this.courses.push(response);
      }
    );
  }

}
