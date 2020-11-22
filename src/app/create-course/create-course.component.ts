import { Component, OnInit } from '@angular/core';

import { CoursesServices } from '../courses/courses.services';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css'],
  providers: [CoursesServices]
})
export class CreateCourseComponent implements OnInit {

  courses: any = [];
  constructor(private coursesServices: CoursesServices) { }

  ngOnInit() {

    this.courses = this.coursesServices.getCourses();
  }

  onAddCourse(course: string) {
    this.coursesServices.addCourse(course);
  }

  selectedCourse(course: string) {
    console.log(course);
  }

}
