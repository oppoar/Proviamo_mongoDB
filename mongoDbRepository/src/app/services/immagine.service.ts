import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Immagine } from '../components/armando-component/imagine.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImmagineService {
  private apiUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  addImmagine(immagine: Immagine): Observable<Immagine> {
    return this.http.post<Immagine>(`${this.apiUrl}/immagine/add`, immagine);
  }
  
  getAllImmagini(): Observable<Immagine[]> {
    return this.http.get<Immagine[]>(this.apiUrl + "/immagine");
  }
  
}
