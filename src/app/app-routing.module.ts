import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from 'src/users/user/user.component';
import { UsersComponent } from 'src/users/users.component';

const routes: Routes = [
  { path: 'users', component:UsersComponent },
  { path: 'user', component:UserComponent},
  { path: '', redirectTo: 'users', pathMatch: 'full' }
];



@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
