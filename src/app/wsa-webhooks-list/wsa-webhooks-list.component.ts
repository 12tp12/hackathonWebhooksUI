import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CreateWsaWebhookComponent } from '../create-wsa-webhook/create-wsa-webhook.component';
import { DialogsHelperService } from '../services/dialogs-helper.service';
import { WsaWebhooksService } from '../services/wsa-webhooks.service';
import { WsaWebhook } from './../models/wsa-webhook';

@Component({
  selector: 'app-wsa-webhooks-list',
  templateUrl: './wsa-webhooks-list.component.html',
  styleUrls: ['./wsa-webhooks-list.component.scss']
})
export class WsaWebhooksListComponent implements OnInit, OnDestroy {
  webhooksList: WsaWebhook[] = [];
  subscription: Subscription = new Subscription();
  constructor(private wsaWebhooksService: WsaWebhooksService,
    private dialogsHelperService: DialogsHelperService) { }

  ngOnInit(): void {
    this.subscription.add(
      this.wsaWebhooksService.all()
      .subscribe(hooksList => {
        this.webhooksList = hooksList;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


  public openCreateHookDialog() {
    this.dialogsHelperService.openDialog(CreateWsaWebhookComponent);
  }
}
