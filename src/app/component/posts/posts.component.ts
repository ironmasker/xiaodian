import { BadRequestError } from './../../exception/bad-request-error';
import { InputFormatDirective } from './../../directive/input-format.directive';
import { NotFoundError } from './../../exception/not-found-error';
import { AppError } from './../../exception/app-error';
import { PostService } from './../../service/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: any[];
  
  constructor(private postService : PostService) {}

  ngOnInit() {
    this.postService.getAll()
    .subscribe(
      posts => this.posts = posts
    //   response=>{
    //   this.posts = response.json();
    // }
    // , error => {
    //   alert("An unexpected error occurred.");
    //   console.log(error);
    // }
    )
  }

  createPost(input: HTMLInputElement) : void {
    let post = {title: input.value};
    //optimistic
    this.posts.splice(0, 0, post);

    input.value = '';

    this.postService.create(post)
    .subscribe((newPost)=>{
      post['id'] = newPost.id;
      //pessimistic
      // this.posts.splice(0, 0, post);
    }, (error : AppError) => {
      //optimistics
      this.posts.splice(0, 1);

      if (error instanceof BadRequestError) {
        // this.form.setErrors(error.originalError);
        console.log(error);
      } else {
        throw error;
        // alert("An unexpected error occurred.");
        // console.log(error);
      }
    });
  }

  updatePost(post) {
    this.postService.update(post)
    .subscribe((updatedPost)=> {
      console.log(updatedPost);
    }
    // , error => {
    //   alert("An unexpected error occurred.");
    //   console.log(error);
    // }
    );
  }

  deletePost(post) {
    let index = this.posts.indexOf(post);
    this.posts.splice(index, 1);

    this.postService.delete(post.id)
    .subscribe(
      /*()=> {
      }*/null, (error : AppError) => {
      this.posts.splice(index, 0, post);
      if (error instanceof NotFoundError) {
        alert("This post has already been deleted.");
      } else {
        throw error;
        // alert("An unexpected error occurred.");
        // console.log(error);
      }
    });
  }
}
