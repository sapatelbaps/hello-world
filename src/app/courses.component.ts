import { Component } from '@angular/core';

@Component({
  selector: 'courses', // <courses></courses>
  //template: '<h2>{{ "Title: " + title }}</h2>'
  template: '<h2>{{ getTitle() }}</h2>'
})
export class CoursesComponent{
  title = "List of courses";

  getTitle() {
    return this.title;
  }
}
