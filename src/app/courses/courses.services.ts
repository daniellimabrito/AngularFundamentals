import { Injectable, EventEmitter } from '@angular/core';
import { LogService } from '../shared/log.service';

@Injectable()
export class CoursesServices {

    constructor(private logService: LogService) {
        this.logService.consoleLog('CoursesServices instance');
    }

    static createdNewCourse = new EventEmitter<any>();
    emitterCourseCreated = new EventEmitter<any>();


    private courses: any = ['Asp.net', 'Anuglar', 'MongoDb'];

    getCourses() {
        this.logService.consoleLog('Getting list of courses');
        return this.courses;
    }

    addCourse(course: string) {
        this.logService.consoleLog(`Adding a new course: ${course}`);

        this.courses.push(course);
        this.emitterCourseCreated.emit(course);
        CoursesServices.createdNewCourse.emit(course);
    }

}
