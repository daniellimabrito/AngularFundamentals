import { Component, OnInit } from '@angular/core';
import { CoursesServices } from '../courses/courses.services';

@Component({
  selector: 'app-get-created-course',
  templateUrl: './get-created-course.component.html',
  styleUrls: ['./get-created-course.component.css']
})
export class GetCreatedCourseComponent implements OnInit {

  course: any;
  constructor(private coursesService: CoursesServices) { }

  ngOnInit() {
    this.coursesService.emitterCourseCreated.subscribe(
      courseCreated => this.course = courseCreated
    );
  }

}
