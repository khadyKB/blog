import { Component } from '@angular/core';
import {Post} from './post';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor() {

    var firebaseConfig = {
      apiKey: 'AIzaSyAyjK6k0gS3f7k_TjE8pwQCGIzgvOh08lM',
      authDomain: 'blog-3727e.firebaseapp.com',
      databaseURL: 'https://blog-3727e.firebaseio.com',
      projectId: 'blog-3727e',
      storageBucket: 'blog-3727e.appspot.com',
      messagingSenderId: '659545105896',
      appId: '1:659545105896:web:5a386c137e774110'
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

  }





}
