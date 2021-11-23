import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWsaWebhookComponent } from './create-wsa-webhook.component';

describe('CreateWsaWebhookComponent', () => {
  let component: CreateWsaWebhookComponent;
  let fixture: ComponentFixture<CreateWsaWebhookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateWsaWebhookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateWsaWebhookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
