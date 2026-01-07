import { TestBed } from '@angular/core/testing';

import { ImgApiService } from './img-api.service';

describe('ImgApiService', () => {
  let service: ImgApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImgApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
