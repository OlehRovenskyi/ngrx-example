import { Action } from '@ngrx/store';

export const R_COUNTER_INCREMENT: string = 'R_COUNTER_INCREMENT';
export const R_COUNTER_DECREMENT: string = 'R_COUNTER_DECREMENT';
export const U_COUNTER_RESET: string = 'U_COUNTER_RESET';
export const R_RESET_COUNTER_SUCCESS = 'R_RESET_COUNTER_SUCCESS';

export class IncrementAction implements Action {
  public readonly type: string = R_COUNTER_INCREMENT;
}

export class DecrementAction implements Action {
  public readonly type: string = R_COUNTER_DECREMENT;
}

export class ResetAction implements Action {
  public readonly type: string = U_COUNTER_RESET;
}
