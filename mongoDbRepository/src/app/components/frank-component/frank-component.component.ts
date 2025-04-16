import { Component } from '@angular/core';
import { ApiPostsService } from '../../services/api-posts.service';


@Component({
  selector: 'app-frank-component',
  imports: [],
  templateUrl: './frank-component.component.html',
  styleUrl: './frank-component.component.scss'
})
export class FrankComponentComponent {

  postData = {
    title: 'Esempio di titolo',
    body: 'Esempio di contenuto'
  };

  constructor(private apiImgPost: ApiPostsService) { }

  createPost() {
    this.apiImgPost.addPost(this.postData).subscribe(response => {
      console.log('Post creato con successo:', response);
    });
  }

  getPosts() {
    this.apiImgPost.getPosts().subscribe(posts => {
      console.log('Posts:', posts);
    });
  }

}
