import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { WsaWebhook } from '../models/wsa-webhook';

@Component({
  selector: 'app-show-wsa-webhook',
  templateUrl: './show-wsa-webhook.component.html',
  styleUrls: ['./show-wsa-webhook.component.scss']
})
export class ShowWsaWebhookComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public webhook: WsaWebhook) { }

  ngOnInit(): void {
  }

}
