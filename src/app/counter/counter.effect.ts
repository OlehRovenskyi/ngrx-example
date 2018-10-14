import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { U_COUNTER_RESET, R_RESET_COUNTER_SUCCESS } from './counter.actions';
import { Observable } from 'rxjs';

@Injectable()
export class CounterEffects {
  @Effect() public reset$ = this.actions$
    .ofType(U_COUNTER_RESET)
    .mergeMap(() => {
      return Observable.of({ type: R_RESET_COUNTER_SUCCESS });
    });

  constructor(
    private actions$: Actions
  ) { }
}
