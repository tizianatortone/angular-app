import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: any;

  constructor(private service: PostService) {} //instead of injecting the http class here, we pass it to the service component and we inject the service on this constructor
  ngOnInit() {
    this.service.getAll().subscribe(
      (posts) => (this.posts = posts)
      //we get this from the service and the method inside that service
    );
    // TO GET DATA
  }
  createPost(Input: HTMLInputElement) {
    const post: any = {
      title: Input.value,
    };
    this.posts.splice(0, 0, post);

    Input.value = ' ';

    this.service.create(post).subscribe(
      (newPost) => {
        post['id'] = newPost.id;
      },
      (error: AppError) => {
        this.posts.splice(0, 1);
        if (error instanceof BadInput) {
          alert('An unexpected error has occurred');
          //this.form.setErrors(error.originalError);
        } else throw error;
      }
    );
  } // TO CREATE DATA

  // update(post: any) {
  // we need to specify the post instead of sending the entire url. See change below

  //sendind only the property that should be modified
  // this.http
  //  .patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }))
  //  .subscribe((updatedPost) => {
  //    console.log(updatedPost);
  //  });

  //sending the entire object
  // this.service.updatePost(post).subscribe((updatedPost) =>{console.log(updatedPost});
  // }//TO UPDATE DATA

  deletePost(post: any) {
    const index = this.posts.indexOf(post);
    this.posts.splice(index, 1);
    //we also need to finde de index os this post in the array
    this.service.delete(post.id).subscribe(null, (error: AppError) => {
      this.posts.splice(index, 0, post);

      if (error instanceof NotFoundError)
        alert('This post has already been deleted');
      else throw error;
    }); // TO DELETE DATA
  }
}
