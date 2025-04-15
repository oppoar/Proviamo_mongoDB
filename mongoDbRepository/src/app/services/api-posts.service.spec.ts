import { TestBed } from '@angular/core/testing';

import { ApiPostsService } from './api-posts.service';

describe('ApiPostsService', () => {
  let service: ApiPostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiPostsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
