import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetCreatedCourseComponent } from './get-created-course.component';

describe('GetCreatedCourseComponent', () => {
  let component: GetCreatedCourseComponent;
  let fixture: ComponentFixture<GetCreatedCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetCreatedCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetCreatedCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
