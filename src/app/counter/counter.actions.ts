import { Action } from '@ngrx/store';

export const COUNTER_INCREMENT: string = 'COUNTER_INCREMENT';
export const COUNTER_DECREMENT: string = 'COUNTER_DECREMENT';
export const COUNTER_RESET: string = 'COUNTER_RESET';
export const R_RESET_COUNTER_SUCCESS = 'R_RESET_COUNTER_SUCCESS';

export class IncrementAction implements Action {
  public readonly type: string = COUNTER_INCREMENT;
}

export class DecrementAction implements Action {
  public readonly type: string = COUNTER_DECREMENT;
}

export class ResetAction implements Action {
  public readonly type: string = COUNTER_RESET;
}
