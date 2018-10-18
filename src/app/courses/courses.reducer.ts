import { Action } from '@ngrx/store';
import { CoursesState } from './courses.models';
import { coursesInitialState } from './courses.const';

import {
  LOAD_COURSES_ERROR,
  LOAD_COURSES_SUCCESS,
  LoadCoursesErrorAction,
  LoadCoursesSuccessAction
} from './courses.actions';

export function courses(
  state: CoursesState = coursesInitialState,
  action: Action & LoadCoursesSuccessAction & LoadCoursesErrorAction
): CoursesState {
  switch (action.type) {
    case LOAD_COURSES_SUCCESS: {
      return {
        courses: action.payload
      };
    }

    case LOAD_COURSES_ERROR: {
      return {
        courses: []
      };
    }

    default: {
      return {
        courses: state.courses
      };
    }
  }
}
