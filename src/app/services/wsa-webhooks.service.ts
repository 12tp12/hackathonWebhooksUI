import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { WsaWebhook } from '../models/wsa-webhook';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WsaWebhooksService {
  private readonly MOCK_URL = 'assets/hooks-mock.json';
  
  constructor(private http: HttpClient) { }

  public all(): Observable< WsaWebhook[]> {
    return this.http.get<WsaWebhook[]>(this.MOCK_URL);
  }
}
