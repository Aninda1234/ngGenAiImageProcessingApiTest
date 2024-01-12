import { TestBed } from '@angular/core/testing';

import { AIPhotoService } from './ai-photo.service';

describe('LivePhotoService', () => {
  let service: AIPhotoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AIPhotoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
