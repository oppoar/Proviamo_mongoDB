import { Component, OnInit } from '@angular/core';
import { Immagine } from './imagine.model';
import { ImmagineService } from '../../services/immagine.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-armando-component',
  imports: [FormsModule,CommonModule],
  templateUrl: './armando-component.component.html',
  styleUrl: './armando-component.component.scss'
})
export class ArmandoComponentComponent implements OnInit {
  immagini: Immagine[] = [];

  nuovaImmagine: Partial<Immagine> = {
    img: '',
    size: 0
  };

  tagInput: string = '';
  private idCounter = 1;

  constructor(private apiImmagine: ImmagineService){}

  
  ngOnInit(): void {
    this.getAllImmagini();
  }
    
  getAllImmagini(): void {
    this.apiImmagine.getAllImmagini().subscribe({
      next: (response) => {
      this.immagini = response;
      console.log('Immagini recuperate con successo:', response);
    },
      error: (err) => {
        console.error('Errore durante il recupero delle immagini:', err);
      }
    });
  }  

  onSubmit() {
    const nuovaImg: Immagine = {
      idImg: this.idCounter++,
      img: this.nuovaImmagine.img || '',
      size: this.nuovaImmagine.size || 0,
      tag: this.tagInput ? this.tagInput.split(',').map(t => t.trim()) : []
    };

    this.apiImmagine.addImmagine(nuovaImg).subscribe({
      next: (response) => {
        console.log('Immagine salvata con successo:', response);
        this.immagini.push(response); 
      },
      error: (err) => {
        console.error('Errore durante il salvataggio:', err);
      }
    });

    console.log(nuovaImg);

    this.nuovaImmagine = { img: '', size: 0 };
    this.tagInput = '';
  }
}
