import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersListModule } from './usersList/usersList.module';
import { UserDetailModule } from './user-detail/user-detail.module';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => UsersListModule
  },
  {
    path: 'users/:id',
    loadChildren: () => UserDetailModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
