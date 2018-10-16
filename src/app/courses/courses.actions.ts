import { Action } from '@ngrx/store';
import { CourseItem } from 'app/courses/courses.models';

export const LOAD_COURSES: string = '[Courses Page] Load Courses';
export const LOAD_COURSES_SUCCESS: string = '[Courses API] Load Courses Success';
export const LOAD_COURSES_ERROR: string = '[Courses API] Load Courses ERROR';

export class LoadCoursesAction implements Action {
  public readonly type: string = LOAD_COURSES;
}

export class LoadCoursesSuccessAction implements Action {
  public readonly type: string = LOAD_COURSES_SUCCESS;
  public payload: CourseItem[];

  constructor(coursesInfo: CourseItem[]) {
    this.payload = coursesInfo;
  }
}

export class LoadCoursesErrorAction implements Action {
  public readonly type: string = LOAD_COURSES_ERROR;
}
