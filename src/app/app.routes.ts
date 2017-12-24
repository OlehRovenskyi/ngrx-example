import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { ExamplesComponent } from './examples';
import { NoContentComponent } from './no-content';

export const ROUTES: Routes = [
  { path: '',      component: ExamplesComponent },
  { path: 'examples', component: ExamplesComponent },
  { path: '**',    component: ExamplesComponent },
];
