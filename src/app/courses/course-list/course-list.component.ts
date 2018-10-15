import {
  Component, ViewEncapsulation, Input
} from '@angular/core';
import {
  CourseItem
} from 'app/courses/courses.models';

@Component({
  selector: 'course-list',
  templateUrl: 'course-list.html',
  styleUrls: [ './course-list.scss' ],
  encapsulation: ViewEncapsulation.None
})

export class CourseListComponent {
  @Input() public courseList: CourseItem[];
}
