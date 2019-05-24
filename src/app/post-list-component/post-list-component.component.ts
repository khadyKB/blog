import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../post';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.sass']
})
export class PostListComponentComponent implements OnInit {

  @Input() post: Post
  @Input() mypostTitle: String

  constructor() { }

  ngOnInit() {
  }

}
