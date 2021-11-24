import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WsaWebhooksListItemComponent } from './wsa-webhooks-list-item.component';

describe('WsaWebhooksListItemComponent', () => {
  let component: WsaWebhooksListItemComponent;
  let fixture: ComponentFixture<WsaWebhooksListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WsaWebhooksListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WsaWebhooksListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
