import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './usersList.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PipeUtilModule } from '../Pipes/pipe-util.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    PipeUtilModule,
    RouterModule.forChild([{ path: '', component: UsersListComponent }])
  ],
  declarations: [
    UsersListComponent
  ]
})
export class UsersListModule { }
