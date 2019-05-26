import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Post} from '../post';
import {Subscription} from 'rxjs';
import {PostService} from '../services/post.service';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.sass']
})
export class PostListComponentComponent implements OnInit, OnDestroy {

  @Input() post: Post
  @Input() mypostTitle: string;

  posts: Post[];
  postSubscription: Subscription;

  constructor(private postService: PostService) { }

  ngOnInit() {

    this.postSubscription = this.postService.postSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postService.getPosts();
    this.postService.emitPost();
  }

  ngOnDestroy() {
    this.postSubscription.unsubscribe();
  }

}
