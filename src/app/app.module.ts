import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CreateWsaWebhookComponent } from './create-wsa-webhook/create-wsa-webhook.component';
import { WsaWebhooksListComponent } from './wsa-webhooks-list/wsa-webhooks-list.component';
import { WsaWebhooksListItemComponent } from './wsa-webhooks-list-item/wsa-webhooks-list-item.component';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CreateWsaWebhookComponent,
    WsaWebhooksListComponent,
    WsaWebhooksListItemComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  entryComponents: [
    CreateWsaWebhookComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
