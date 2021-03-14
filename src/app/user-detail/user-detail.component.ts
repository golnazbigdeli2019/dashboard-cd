import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GetUsersService } from '../get-users.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
  providers: [GetUsersService]
})
export class UserDetailComponent implements OnInit {

  user$: Observable<any>;
  posts$: Observable<any>;

  constructor(private route: ActivatedRoute,
              private userService: GetUsersService,
              private router: Router) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.user$ = this.userService.getUserDetail(id);
    this.posts$ = this.userService.getPosts(id);
  }
  goHome() {
    this.router.navigate(['']);
  }

}
