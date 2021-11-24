import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-wsa-webhook',
  templateUrl: './create-wsa-webhook.component.html',
  styleUrls: ['./create-wsa-webhook.component.scss']
})
export class CreateWsaWebhookComponent implements OnInit {
  public webhook: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<CreateWsaWebhookComponent>) {}

  ngOnInit() {
    this.webhook = this.formBuilder.group({
      url: ['', Validators.required],
      name: ['', Validators.required],
      filters: ['', [Validators.required, Validators.email]],
      kuku: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  onSubmit() {
    console.log('Submitted!!');
  }

  public cancelCreation() {
      this.dialogRef.close();
  }

  isRegisterButtonDisabled() {
    return this.webhook.invalid;
  }

  public isInputValidationFailed(inputControl: AbstractControl): boolean {
    if (!inputControl) {
      return false;
    }

    return inputControl.invalid && (inputControl.dirty || inputControl.touched);
  }

  public getInputBorderStyle(inputControl: any) {
    return this.isInputValidationFailed(inputControl) ? '2px solid red' : '';
  }

  public setInputBorderStyleInvalid(isInvalid: boolean) {
    return isInvalid === true ? '2px solid red' : '';
  }

  get form() {
    return this.webhook.controls;
  }
}
