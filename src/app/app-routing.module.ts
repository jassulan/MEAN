import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { MainPageComponent } from './main-page/main-page.component';
import { ContactsComponent } from './contacts/contacts.component';
import { MyscriptComponent } from './myscript/myscript.component';
import { ProfileCreateComponent } from './profiles/profile-create.component';
import { AuthGuard } from './auth/auth.guards';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'script', component: MyscriptComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileCreateComponent, canActivate: [AuthGuard] },
  {
    path: 'edit/:profileId',
    component: ProfileCreateComponent,
    canActivate: [AuthGuard],
  },
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
