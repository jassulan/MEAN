import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page.component';
import { AngularMaterialModule } from '../angular-material.module';


@NgModule({
declarations:[
  MainPageComponent
],
imports: [
  CommonModule,
  RouterModule,
  ReactiveFormsModule,
  AngularMaterialModule
]
})
export class MainPageModule{

}
