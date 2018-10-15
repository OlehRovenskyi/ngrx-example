import { NgModule } from '@angular/core';
import { CourseItemComponent } from './course-item.component';
import { SharedModule } from 'app/shared';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [
    CourseItemComponent
  ],
  declarations: [
    CourseItemComponent
  ]
})

export class CourseItemModule {
}
