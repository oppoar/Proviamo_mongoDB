import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiPostsService } from './services/api-posts.service';
import { ArmandoComponentComponent } from './components/armando-component/armando-component.component';
import { FrankComponentComponent } from './components/frank-component/frank-component.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ArmandoComponentComponent, FrankComponentComponent],
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
