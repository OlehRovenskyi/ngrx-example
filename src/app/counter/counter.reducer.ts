import { Action } from '@ngrx/store';
import { CounterState } from './counter.models';
import { initialState } from './counter.const';

import { R_COUNTER_INCREMENT, R_COUNTER_DECREMENT, R_RESET_COUNTER_SUCCESS } from './counter.actions';

export function counter(state: CounterState = initialState, action: Action): CounterState {
  switch (action.type) {
    case R_COUNTER_INCREMENT: {
      return {
        counter: state.counter + 1
      };
    }

    case R_COUNTER_DECREMENT: {
      return {
        counter: state.counter - 1
      };
    }

    case R_RESET_COUNTER_SUCCESS: {
      return {
        counter: 0
      };
    }

    default: {
      return {
        counter: state.counter
      };
    }
  }
}
