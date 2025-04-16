import { Component, OnInit } from '@angular/core';
import { ApiPostsService } from '../../services/api-posts.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-frank-component',
  imports: [CommonModule],
  templateUrl: './frank-component.component.html',
  styleUrl: './frank-component.component.scss'
})
export class FrankComponentComponent implements OnInit {

  selectedFile: File | null = null;
  images: any[] = [];
  imgUrlPrefix: string = 'http://localhost:5000/uploads/';

/*   postData = {
    title: 'Esempio di titolo',
    body: 'Esempio di contenuto'
  };
 */

  constructor(private apiImgPost: ApiPostsService) { }
  
/* 
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
 */

  ngOnInit() {
    this.getImagesFromDb();
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    console.log('File selezionato:', this.selectedFile); // 👈 utile per debug
  }

  uploadImage() {
    if (this.selectedFile) {
      this.apiImgPost.addImages(this.selectedFile).subscribe({
        next: (res) => {
          console.log('Upload riuscito:', res);
          this.getImagesFromDb(); // aggiorna la lista
        },
        error: (err) => {
          console.error('Errore durante upload:', err);
        }
      });
    }
  }

  getImagesFromDb() {
    this.apiImgPost.getImages().subscribe({
      next: (res) => {
        this.images = res; // Assumendo che il backend restituisca un array di immagini
      },
      error: (err) => {
        console.error('Errore nel caricamento immagini:', err);
      }
    });
  }
}