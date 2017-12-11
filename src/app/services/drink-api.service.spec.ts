import { TestBed, inject } from '@angular/core/testing';

import { DrinkApiService } from './drink-api.service';

describe('DrinkApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DrinkApiService]
    });
  });

  it('should be created', inject([DrinkApiService], (service: DrinkApiService) => {
    expect(service).toBeTruthy();
  }));
});
