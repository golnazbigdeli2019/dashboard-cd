import { Component, OnInit } from '@angular/core';
import { GetUsersService } from '../get-users.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './usersList.component.html',
  styleUrls: ['./usersList.component.css'],
  providers: [GetUsersService]
})
export class UsersListComponent implements OnInit {

  usersList = [];
  filter = '';
  selectedOption;
  name;
  username;
  email;

  constructor(private service: GetUsersService) { }

  ngOnInit() {
    try {
      this.selectedOption = 'name';
      this.service.getUsersList().pipe(
        map(item => item.sort((a, b) => a.name < b.name ? -1 : 1))
      ).subscribe(res => {
        res.forEach(user => {
          return this.usersList.push(user);
        });
      });
    } catch (error) {
      console.log('err1234', error);
    }
  }
}
