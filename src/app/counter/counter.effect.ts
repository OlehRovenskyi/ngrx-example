import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import 'rxjs/add/operator/map';

import { COUNTER_RESET, R_RESET_COUNTER_SUCCESS } from './counter.actions';

@Injectable()
export class CounterEffects {
  @Effect() public reset$ = this.actions$
    .ofType(COUNTER_RESET)
    .map(() => ({ type: R_RESET_COUNTER_SUCCESS }));

  constructor(
    private actions$: Actions
  ) { }
}
