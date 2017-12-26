import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import 'rxjs/add/operator/map';

import { RESET, RESET_SUCCESS } from './counter.actions';

@Injectable()
export class CounterEffects {
  @Effect() public reset$ = this.actions$
    .ofType(RESET)
    .map(() => ({ type: RESET_SUCCESS }));

  constructor(
    private actions$: Actions
  ) { }
}
