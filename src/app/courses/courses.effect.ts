import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

import { of } from 'rxjs/observable/of';
import { catchError, map, switchMap } from 'rxjs/operators';

import {
  LOAD_COURSES,
  LoadCoursesErrorAction,
  LoadCoursesSuccessAction
} from 'app/courses/courses.actions';
import { CoursesResourceService } from 'app/courses/courses-resource.service';
import { CourseItem } from 'app/courses/courses.models';

@Injectable()
export class CoursesEffects {

  @Effect()
  loadMovies$ = this.actions$
    .ofType(LOAD_COURSES)
    .pipe(
      switchMap(() => {
        return this.coursesResourceService.loadCourses()
          .pipe(
            map((coursesInfo: CourseItem[]) => new LoadCoursesSuccessAction(coursesInfo)),
            catchError(error => of(new LoadCoursesErrorAction()))
          );
      })
    );

  // @Effect()
  // loadMovies$ = this.actions$
  //   .ofType(LOAD_COURSES)
  //   .switchMap(() => {
  //     return this.coursesResourceService.loadCourses()
  //       .map((coursesInfo: CourseItem[]) => new LoadCoursesSuccessAction(coursesInfo))
  //       .catch((error) => of(new LoadCoursesErrorAction()))
  //   });

  constructor(
    private actions$: Actions,
    private coursesResourceService: CoursesResourceService
  ) { }
}
