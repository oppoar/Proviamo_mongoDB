import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiPostsService } from './services/api-posts.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mongoDbRepository';
  
  postData = {
    title: 'Esempio di titolo',
    body: 'Esempio di contenuto'
  };

  constructor (private apiPost : ApiPostsService) {}

  createPost() {
    this.apiPost.addPost(this.postData).subscribe(response => {
      console.log('Post creato con successo:', response);
    });
  }

  getPosts() {
    this.apiPost.getPosts().subscribe(posts => {
      console.log('Posts:', posts);
    });
  }
}
