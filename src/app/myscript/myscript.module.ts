import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { MyscriptComponent } from './myscript.component';
import { AngularMaterialModule } from '../angular-material.module';


@NgModule({
declarations:[
  MyscriptComponent
],
imports: [
  CommonModule,
  RouterModule,
  ReactiveFormsModule,
  AngularMaterialModule
]
})
export class MyscriptModule{

}
