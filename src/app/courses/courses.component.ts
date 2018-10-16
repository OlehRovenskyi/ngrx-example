import {
  Component, OnInit, ViewEncapsulation
} from '@angular/core';

import { CoursesState} from './courses.models';
import { LoadCoursesAction } from 'app/courses/courses.actions';
import { getCoursesState } from 'app/courses/courses.selectors';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'courses',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  public coursesStore$: Observable<CoursesState>;

  public constructor(
    private store: Store<CoursesState>
  ) {
    this.coursesStore$ = this.store.select(getCoursesState);
  }

  public ngOnInit(): void {
    this.loadCourses();
  }

  private loadCourses() {
    this.store.dispatch(new LoadCoursesAction());
  }
}
