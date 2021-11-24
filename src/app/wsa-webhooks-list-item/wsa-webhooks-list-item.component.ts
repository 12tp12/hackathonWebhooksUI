import { Component, Input, OnInit } from '@angular/core';
import { CreateWsaWebhookComponent } from '../create-wsa-webhook/create-wsa-webhook.component';
import { WsaWebhook } from '../models/wsa-webhook';
import { DialogsHelperService } from '../services/dialogs-helper.service';

@Component({
  selector: 'app-wsa-webhooks-list-item',
  templateUrl: './wsa-webhooks-list-item.component.html',
  styleUrls: ['./wsa-webhooks-list-item.component.scss']
})
export class WsaWebhooksListItemComponent implements OnInit {
  @Input() webhook: WsaWebhook;
  
  constructor(private dialogsHelperService: DialogsHelperService) { }

  ngOnInit(): void {
  }

  public openCreateHookDialog() {
    this.dialogsHelperService.openDialog(CreateWsaWebhookComponent);
  }
}
