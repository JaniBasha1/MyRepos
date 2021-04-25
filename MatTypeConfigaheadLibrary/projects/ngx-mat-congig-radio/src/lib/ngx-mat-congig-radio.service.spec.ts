import { TestBed } from '@angular/core/testing';

import { NgxMatCongigRadioService } from './ngx-mat-congig-radio.service';

describe('NgxMatCongigRadioService', () => {
  let service: NgxMatCongigRadioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxMatCongigRadioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
