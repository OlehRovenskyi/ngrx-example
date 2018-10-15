import {
  Component, ViewEncapsulation, Input
} from '@angular/core';
import {
  CourseItem,
} from 'app/courses/courses.models';

@Component({
  selector: 'course-item',
  templateUrl: 'course-item.html',
  styleUrls: [ './course-item.scss' ],
  encapsulation: ViewEncapsulation.None
})

export class CourseItemComponent {
  @Input() public course: CourseItem;
}
