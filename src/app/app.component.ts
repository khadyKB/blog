import { Component } from '@angular/core';
import {Post} from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  posts = [
    new Post('Post 1', 'this is my first Post hope that you will like it',10, new Date()),
    new Post('Post 2', 'this is my second Post hope that you will like it',2, new Date()),
    new Post('Post 3', 'this is my third Post hope that you will like it',6, new Date())

  ];





}
