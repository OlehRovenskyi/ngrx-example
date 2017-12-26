import { Action } from '@ngrx/store';

export const INCREMENT: string = 'INCREMENT';
export const DECREMENT: string = 'DECREMENT';
export const RESET: string = 'RESET';
export const RESET_SUCCESS = 'RESET_SUCCESS';

export class IncrementAction implements Action {
  public readonly type: string = INCREMENT;
}

export class DecrementAction implements Action {
  public readonly type: string = DECREMENT;
}

export class ResetAction implements Action {
  public readonly type: string = RESET;
}

export class ResetSuccessAction implements Action {
  public readonly type: string = RESET_SUCCESS;
}
