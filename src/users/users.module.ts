import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UserComponent } from './user/user.component';



@NgModule({
  declarations: [UsersComponent, UserComponent],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
