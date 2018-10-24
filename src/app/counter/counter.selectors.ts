import { createFeatureSelector } from '@ngrx/store';
import { CounterState } from './counter.models';

export const getCounterState = createFeatureSelector<CounterState>(
  'counter'
);
