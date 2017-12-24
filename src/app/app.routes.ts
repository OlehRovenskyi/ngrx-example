import { Routes } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';

export const ROUTES: Routes = [
  { path: '',      component: AboutComponent },
  { path: 'about', component: AboutComponent },
  { path: '**',    component: AboutComponent },
];
