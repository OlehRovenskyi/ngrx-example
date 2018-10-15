import { Action } from '@ngrx/store';

export const GET_COURSES: string = '[Courses Page] Get Courses';
export const LOAD_COURSES_SUCCESS: string = '[Courses API] Load Courses Success';

export class GetCoursesAction implements Action {
  public readonly type: string = GET_COURSES;
}
