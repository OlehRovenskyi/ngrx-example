import { Routes } from '@angular/router';
import { CoursesComponent } from 'app/courses';

export const ROUTES: Routes = [
  { path: '',      component: CoursesComponent },
  { path: '**',    component: CoursesComponent },
];
