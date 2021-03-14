import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(users: any, sortBy: ''): any {
    const sort = sortBy.toLowerCase();
    const res = users.sort((a, b) => {
      return a[sort].localeCompare(b[sort]);
    });
    return res;
  }
}
