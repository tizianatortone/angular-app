import { Component } from '@angular/core';
import { FavouriteChangedEventArgs } from './favourite/favourite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  post = {
    title: 'Title',
    isFavourite: true,
  };

  tweet = {
    body: '...',
    likesCount: 10,
    isLiked: true,
  };
  courses = [];

  viewMode = 'somethingElse';

  coursess: any;

  loadCourses() {
    this.coursess = [
      { id: 1, name: 'course1' },
      { id: 2, name: 'course2' },
      { id: 3, name: 'course3' },
    ];
  }

  onChange(course: any) {
    course.name = 'UPDATED';
  }

  trackCourse(index: any, course: any) {
    return course ? course.id : undefined;
  }
  onFavouriteChanged(eventArgs: FavouriteChangedEventArgs) {
    console.log('Favourite Changed: ', eventArgs);
  }

  canSave = true;

  task = {
    title: 'Review Applications',
    assignee: {
      name: 'John Smith',
    },
  };
}
