import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [],
  exports: [
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: []
})
export class SharedModule {}
