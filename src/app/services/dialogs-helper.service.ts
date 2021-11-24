import { Injectable } from '@angular/core';
import { ComponentType } from '@angular/cdk/portal';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class DialogsHelperService {

  constructor(public dialog: MatDialog) { }
  
  public openDialog(dialog: ComponentType<{}>, width?: string, dialogData?: any, isFullScreen?: boolean) {
    let dialogWidth = '450px';
    if (width) {
      dialogWidth = width;
    }

    let dialogRef;
    if (!!isFullScreen) {
      dialogRef = this.dialog.open(dialog, {
        maxWidth: '98vh',
        maxHeight: '98vh',
        height: '98%',
        width: '98%',
        data: dialogData,
        panelClass: 'full-screen-modal',
      });
    } else {
      dialogRef = this.dialog.open(dialog, {
        width: dialogWidth,
        data: dialogData
      });
    }

    return dialogRef.afterClosed();
  }

}
