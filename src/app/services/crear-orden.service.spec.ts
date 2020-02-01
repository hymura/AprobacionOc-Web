import { TestBed } from '@angular/core/testing';

import { CrearOrdenService } from './crear-orden.service';

describe('CrearOrdenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrearOrdenService = TestBed.get(CrearOrdenService);
    expect(service).toBeTruthy();
  });
});
