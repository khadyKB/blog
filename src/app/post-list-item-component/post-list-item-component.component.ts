import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../post';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.sass']
})
export class PostListItemComponentComponent implements OnInit {

  dontloveIt = 0;
  loveIt = 0 ;
  @Input() post: Post
  @Input() mypostTitle: string

  constructor() {

  }

  ngOnInit() {
  }

  dislike() {
    this.dontloveIt += 1;
    console.log(this.dontloveIt);
  }
  likeIt() {
    this.loveIt += 1;
    console.log(this.loveIt);

  }

}
