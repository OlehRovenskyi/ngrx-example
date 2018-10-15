import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { CoursesResourceService } from './courses-resource.service';
import { CourseListModule } from 'app/courses/course-list';

@NgModule({
  imports: [
    CommonModule,
    CourseListModule
  ],
  declarations: [
    CoursesComponent
  ],
  exports: [
    CoursesComponent
  ],
  providers: [
    CoursesResourceService
  ]
})
export class CoursesModule {}
