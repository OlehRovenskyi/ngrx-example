import { NgModule } from '@angular/core';
import { CourseListComponent } from './course-list.component';
import { CourseItemModule } from '../course-item';
import { SharedModule } from 'app/shared';

@NgModule({
  imports: [
    SharedModule,
    CourseItemModule
  ],
  exports: [
    CourseListComponent
  ],
  declarations: [
    CourseListComponent
  ]
})

export class CourseListModule {
}
