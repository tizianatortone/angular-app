import {
  FormArray,
  FormControl,
  AbstractControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css'],
})
export class NewCourseFormComponent {
  form;
  // see the FORMBUILDER BELOW for a cleaner code but free to choose what you consider better
  // = new FormGroup({
  // name: new FormControl(' ', Validators.required),
  // contact: new FormGroup({
  //   email: new FormControl(),
  //   phone: new FormControl(),
  //  }),
  // topics: new FormArray([]),
  // });//

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: [' ', Validators.required],
      contact: fb.group({
        email: [],
        phone: [],
      }),
      topics: fb.array([]),
    });
  }

  addTopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value));
    topic.value = ' ';
  }

  removeTopic(topic: AbstractControl) {
    const index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

  get topics() {
    return this.form.get('topics') as FormArray;
  }
}
