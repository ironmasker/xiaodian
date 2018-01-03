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
    this.postService.getPosts()
    .subscribe(response=>{
      this.posts = response.json();
    }
    // , error => {
    //   alert("An unexpected error occurred.");
    //   console.log(error);
    // }
    )
  }

  createPost(input: HTMLInputElement) : void {
    let post = {title: input.value};
    input.value = '';

    this.postService.createPost(post)
    .subscribe((response)=>{
      post['id'] = response.json().id;
      this.posts.splice(0, 0, post);
    }, (error : AppError) => {
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
    this.postService.updatePost(post)
    .subscribe((response)=> {
      console.log(response.json());
    }
    // , error => {
    //   alert("An unexpected error occurred.");
    //   console.log(error);
    // }
    );
  }

  deletePost(post) {
    this.postService.deletePost(post.id)
    .subscribe((response)=> {
      let index = this.posts.indexOf(post);
      this.posts.splice(index, 1);
    }, (error : AppError) => {
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
