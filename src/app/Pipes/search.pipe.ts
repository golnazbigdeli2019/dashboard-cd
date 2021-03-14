import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchBy'
})
export class SearchPipe implements PipeTransform {

  transform(users: any, filterBy: any): any {
    if (filterBy) {
      filterBy = filterBy.toLowerCase();
      return users.filter(it => {
        const result = it.name.toLowerCase().includes(filterBy) ||
        it.username.toLowerCase().includes(filterBy) ||
        it.email.toLowerCase().includes(filterBy);
        return result;
      });
    } else {
      return users;
    }
  }
}
