import { Routes } from '@angular/router';
import { CounterComponent } from 'app/counter';

export const ROUTES: Routes = [
  { path: '',      component: CounterComponent },
  { path: '**',    component: CounterComponent },
];
