import {
  Component, OnInit, ViewEncapsulation
} from '@angular/core';

import { CoursesInfo, CoursesState} from './courses.models';
import { CoursesResourceService } from './courses-resource.service';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'courses',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  private currentValue$: Observable<CoursesState>;

  constructor(
    private coursesResourceService: CoursesResourceService
  ) {}

  public ngOnInit(): void {
    this.getCourses();
  }

  public getCourses(): void {
    this.coursesResourceService.getCourses()
      .subscribe((courses: CoursesInfo) => {
        console.log(courses);
      });
  }
}
