import { AuthorsService } from './services/authors.service';
import { Component } from '@angular/core';
@Component({
  selector: 'authors',
  template: `<button class="btn btn-primary">Click me!</button>
    {{ text | summary : 10 }}`,
})
export class AuthorsComponent {
  authors;
  text =
    'In summary, the Bash terminal is a general-purpose command-line environment, while the Node.js terminal is specifically tailored for executing JavaScript code using Node.js. The choice of terminal depends on your requirements and the tasks you want to perform in your VS Code session.';

  constructor(service: AuthorsService) {
    this.authors = service.getAuthors();
  }
}
