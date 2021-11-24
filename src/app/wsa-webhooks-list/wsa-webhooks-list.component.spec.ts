import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WsaWebhooksListComponent } from './wsa-webhooks-list.component';

describe('WsaWebhooksListComponent', () => {
  let component: WsaWebhooksListComponent;
  let fixture: ComponentFixture<WsaWebhooksListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WsaWebhooksListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WsaWebhooksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
