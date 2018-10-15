import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { CoursesResourceService } from './courses-resource.service';

@NgModule({
  imports: [
    CommonModule
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
