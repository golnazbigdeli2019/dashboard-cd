import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class GetUsersService {

  usersUrl = 'https://jsonplaceholder.typicode.com/users';
  postsUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private httpClient: HttpClient) { }

  getUsersList(): Observable<any[]> {
    try {
      return this.httpClient.get<any[]>(this.usersUrl)
        .pipe(
          tap(_ => console.log('Fetched Users')),
          catchError(error => {
            return throwError(error);
          })
        );
    } catch (error) {
      console.log('err1234', error);
    }
  }

  getUserDetail(id) {
    try {
      return this.httpClient.get<any[]>(this.usersUrl + '/' + id)
        .pipe(
          tap(_ => console.log('Fetched User Detail')),
          catchError(error => {
            return throwError(error);
          })
        );
    } catch (error) {
      console.log('err1234', error);
    }
  }

  getPosts(id) {
    return this.httpClient.get<any[]>(this.postsUrl + '?userId=' + id)
      .pipe(
        tap(_ => console.log('Fetched Posts')),
        catchError(error => {
          return throwError(error);
        })
      );
  }
}
