import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';

import { ContactsComponent } from './contacts.component';
import { AngularMaterialModule } from '../angular-material.module';


@NgModule({
declarations:[
  ContactsComponent
],
imports: [
  CommonModule,
  RouterModule,
  ReactiveFormsModule,
  AngularMaterialModule,
  MatTableModule
]
})
export class ContactsModule{

}
