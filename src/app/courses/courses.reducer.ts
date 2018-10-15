import { Action } from '@ngrx/store';
import { CoursesState } from './courses.models';
import { initialState } from './courses.const';

import {
  LOAD_COURSES_ERROR,
  LOAD_COURSES_SUCCESS
} from './courses.actions';

export function courses(state: CoursesState = initialState, action: Action): CoursesState {
  switch (action.type) {
    case LOAD_COURSES_SUCCESS: {
      return {
        courses: state.courses,
        count: state.count
      };
    }

    case LOAD_COURSES_ERROR: {
      return {
        courses: [],
        count: 0
      };
    }

    default: {
      return {
        courses: state.courses,
        count: state.count
      };
    }
  }
}
