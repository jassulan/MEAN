import { Component, Inject } from "@angular/core";
import { MatDialog  , MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  templateUrl: "./error.component.html",
  selector: "app-error",
})
export class ErrorComponent {
 // constructor(@Inject(MAT_DIALOG_DATA) public data: { message: string }) {}

  constructor( private dialog: MatDialog ,   public dialogRef: MatDialogRef<ErrorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { message: string } ){}

  close(){
    this.dialogRef.close(true);
 }
 }
