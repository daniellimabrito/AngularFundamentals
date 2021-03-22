import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostbindingComponent } from './hostbinding.component';

describe('HostbindingComponent', () => {
  let component: HostbindingComponent;
  let fixture: ComponentFixture<HostbindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostbindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostbindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
