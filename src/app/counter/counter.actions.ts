import { Action } from '@ngrx/store';
// import { CounterState } from './counter.models';
// import { Injectable } from '@angular/core';

// @Injectable()
// export class CounterActions {
//   public static INCREMENT: string = 'INCREMENT';
//   public static DECREMENT: string = 'DECREMENT';
//   public static RESET: string = 'RESET';
//
//   public static increment(counter: number): Action {
//     // return new NgrxAction(DrawerActions.ASSIGN_EMPLOYEES, {}, {
//     //   requirements: [{permissions: [DRAWER_ASSIGN.name]}]
//     // });
//     return {
//       type: CounterActions.INCREMENT,
//       payload: {
//         counter
//       }
//     };
//   }
// }

export const INCREMENT: string = 'INCREMENT';
export const DECREMENT: string = 'DECREMENT';
export const RESET: string = 'RESET';

export class IncrementAction implements Action {
  public readonly type: string = INCREMENT;

  // constructor(public payload: CounterState) {}
}

export class DecrementAction implements Action {
  public readonly type: string = DECREMENT;

  // constructor(public payload: CounterState) {}
}

export class ResetAction implements Action {
  public readonly type: string = RESET;

  // constructor(public payload: CounterState) {}
}
