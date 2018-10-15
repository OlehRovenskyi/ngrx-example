import {
  Component, OnInit, ViewEncapsulation
} from '@angular/core';

import { CoursesInfo, CoursesState} from './courses.models';
import { CoursesResourceService } from './courses-resource.service';
import { LoadCoursesAction } from 'app/courses/courses.actions';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'courses',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  public coursesStore$: any; // Observable<CoursesState>;

  constructor(
    private store: Store<CoursesState>
  ) {
    this.coursesStore$ = this.store.select('courses');

    // this.coursesStore$.subscribe(data => {console.log(data)})
  }

  public ngOnInit(): void {
    this.loadCourses();
  }

  private loadCourses() {
    this.coursesStore$.dispatch(new LoadCoursesAction());
  }
}
