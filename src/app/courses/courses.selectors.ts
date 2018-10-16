import { createFeatureSelector } from '@ngrx/store';
import { CoursesState } from 'app/courses/courses.models';

export const getCoursesState = createFeatureSelector<CoursesState>(
  'courses'
);
