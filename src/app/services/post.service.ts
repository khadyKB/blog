import { Injectable } from '@angular/core';
import {Post} from '../post';
import {Subject} from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: Post[] = [];
  postSubject = new Subject<Post[]>();

  constructor() { }

  emitPost() {
    this.postSubject.next(this.posts);
  }

  getPosts() {
    firebase.database().ref('/posts').on('value', (data) => {
      this.posts = data.val() ? data.val() : [];
      this.emitPost();
    });
  }

  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
  }

  addPost(post: Post) {
    this.posts.push(post);
    this.savePosts();
    this.emitPost();
  }

  deletePost(post: Post) {
    const PostToDelete = this.posts.findIndex(
      (singlePost) => {
        if (singlePost === post) {
          return true;
        }
      }
    );
    this.posts.splice(PostToDelete,1);
    this.savePosts();
    this.emitPost();

  }
}
