/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BacklogService } from './backlog.service';

describe('Service: Backlog', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BacklogService]
    });
  });

  it('should ...', inject([BacklogService], (service: BacklogService) => {
    expect(service).toBeTruthy();
  }));
});
