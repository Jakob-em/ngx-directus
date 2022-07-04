import { TestBed } from '@angular/core/testing';

import { NgxDirectusService } from './ngx-directus.service';

describe('NgxDirectusService', () => {
  let service: NgxDirectusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxDirectusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
