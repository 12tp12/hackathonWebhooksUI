import { TestBed } from '@angular/core/testing';

import { WsaWebhooksService } from './wsa-webhooks.service';

describe('WsaWebhooksService', () => {
  let service: WsaWebhooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WsaWebhooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
