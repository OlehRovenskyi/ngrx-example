import { Action } from '@ngrx/store';
import { CoursesState } from './courses.models';
import { initialState } from './courses.const';

import {
  LOAD_COURSES_ERROR,
  LOAD_COURSES_SUCCESS, LoadCoursesErrorAction, LoadCoursesSuccessAction
} from './courses.actions';

export function courses(
  state: CoursesState = initialState,
  action: Action & LoadCoursesSuccessAction & LoadCoursesErrorAction
): CoursesState {
  switch (action.type) {
    case LOAD_COURSES_SUCCESS: {
      return {
        courses: action.payload.courses,
        count: action.payload.count
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
