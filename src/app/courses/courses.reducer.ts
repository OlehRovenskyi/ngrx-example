import { Action } from '@ngrx/store';
import { CoursesState } from './courses.models';
import { initialState } from './courses.const';

import { R_COUNTER_INCREMENT } from './courses.actions';

export function courses(state: CoursesState = initialState, action: Action): CoursesState {
  switch (action.type) {
    case R_COUNTER_INCREMENT: {
      return {
        courses: []
      };
    }

    // default: {
    //   return {
    //     // counter: state.courses
    //   };
    // }
  }
}
