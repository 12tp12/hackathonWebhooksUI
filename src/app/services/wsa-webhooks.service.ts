import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { WsaWebhook } from '../models/wsa-webhook';

@Injectable({
  providedIn: 'root'
})
export class WsaWebhooksService {

  constructor() { }

  public all(): Observable< WsaWebhook[]> {
    const a = {
      url: 'aa'
    } as WsaWebhook;
    return of([a]);
  }
}
