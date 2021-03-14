import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortByPipe } from './sort-by.pipe';
import { SearchPipe } from './search.pipe';


@NgModule({
  declarations: [
    SortByPipe,
    SearchPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SortByPipe,
    SearchPipe
  ]
})
export class PipeUtilModule { }
