import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { of } from 'rxjs/observable/of';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

import {
  LOAD_COURSES,
  LOAD_COURSES_SUCCESS,
  LoadCoursesErrorAction,
  LoadCoursesSuccessAction
} from 'app/courses/courses.actions';
import { CoursesResourceService } from 'app/courses/courses-resource.service';
import { CoursesInfo } from 'app/courses/courses.models';

@Injectable()
export class CoursesEffects {

  // @Effect()
  // loadMovies$ = this.actions$
  //   .ofType(LOAD_COURSES)
  //   .pipe(
  //     switchMap(() => {
  //       return this.coursesResourceService.getCourses()
  //         .pipe(
  //           map((coursesInfo: CoursesInfo) => new LoadCoursesSuccessAction(coursesInfo)),
  //           catchError(error => of(new LoadCoursesErrorAction(error)))
  //         );
  //     })
  //   );

  @Effect()
  loadMovies$ = this.actions$
    .ofType(LOAD_COURSES)
    .switchMap(() => {
      return this.coursesResourceService.loadCourses()
        .map((coursesInfo: CoursesInfo ) => new LoadCoursesSuccessAction(coursesInfo))
        .catch((error) => of(new LoadCoursesErrorAction()))
    });

  constructor(
    private actions$: Actions,
    private coursesResourceService: CoursesResourceService
  ) { }
}
