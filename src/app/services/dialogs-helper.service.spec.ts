import { TestBed } from '@angular/core/testing';

import { DialogsHelperService } from './dialogs-helper.service';

describe('DialogsHelperService', () => {
  let service: DialogsHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DialogsHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
