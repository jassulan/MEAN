import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { ProfileCreateComponent } from './profile-create.component';
import { AngularMaterialModule } from '../angular-material.module';


@NgModule({
declarations:[
  ProfileCreateComponent
],
imports: [
  CommonModule,
  RouterModule,
  ReactiveFormsModule,
  AngularMaterialModule
]
})
export class ProfilesModule{

}
