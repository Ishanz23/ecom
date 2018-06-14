import { TestBed, inject } from '@angular/core/testing';

import { ItemsService } from './item.service';

describe('ItemsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemsService]
    });
  });

  it('should be created', inject([ItemsService], (service: ItemsService) => {
    expect(service).toBeTruthy();
  }));
});
