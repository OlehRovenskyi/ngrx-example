import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { switchMap } from 'rxjs/operator/switchMap';
import { Observable } from 'rxjs/Observable';

import { GET_COURSES } from 'app/courses/courses.actions';

@Injectable()
export class CoursesEffects {

  @Effect()
  loadMovies$ = this.actions$.ofType(GET_COURSES).pipe(
    switchMap(() => {
      return this.movieService
        .getMovies()
        .pipe(
          map(movies => new movieActions.LoadMoviesSuccess(movies)),
          catchError(error => of(new movieActions.LoadMoviesFail(error)))
        );
    })
  );

  constructor(
    private actions$: Actions
  ) { }
}
