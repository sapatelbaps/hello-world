import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses', // <courses></courses>
  //template: '<h2>{{ "Title: " + title }}</h2>'
  template: `
  <h2>{{ getTitle() }}</h2>
  <ul>
    <li *ngFor="let course of courses">
      {{course}}
    </li>
  </ul>
  `
})
export class CoursesComponent{
  title = "List of courses";
  courses;

  constructor(service: CoursesService){
    // makes it tightly coupled as if any change is there in service then need to change everywhere - fragile change.
    // let service = new CoursesService();

    this.courses = service.getCourses();
    }

    getTitle(): string {
      return this.title;
    }

  // Logic for calling HTTP service from this component - issue is tightly couopled.
}
