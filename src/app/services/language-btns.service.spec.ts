import { TestBed } from '@angular/core/testing';

import { LanguageBtnsService } from './language-btns.service';

describe('LanguageBtnsService', () => {
  let service: LanguageBtnsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LanguageBtnsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
