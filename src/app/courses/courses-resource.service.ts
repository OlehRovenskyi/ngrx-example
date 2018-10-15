import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';

import { CoursesInfo } from 'app/courses/courses.models';

@Injectable()
export class CoursesResourceService {
  private baseUrl: string;

  constructor(
    private http: HttpClient
  ) {
    this.baseUrl = 'http://localhost:3004';
  }

  public getCourses(): Observable<CoursesInfo> {
    return this.http
      .get(`${ this.baseUrl }/courses`)
      .pipe(catchError((error: any) => Observable.throw(error.json())));
  }
}
