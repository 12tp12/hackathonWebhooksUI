import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowWsaWebhookComponent } from './show-wsa-webhook.component';

describe('ShowWsaWebhookComponent', () => {
  let component: ShowWsaWebhookComponent;
  let fixture: ComponentFixture<ShowWsaWebhookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowWsaWebhookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowWsaWebhookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
