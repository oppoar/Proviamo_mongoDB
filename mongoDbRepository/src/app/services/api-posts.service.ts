import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiPostsService {
  private apiUrl = 'http://localhost:5000';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/posts');
  }

  addPost(postData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/posts/add', postData);
  }


  getImages(): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/images');
  }
  
  addImages(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('image', file); // tutto coerente
  
    return this.http.post<any>(this.apiUrl + '/images/add', formData);
  }
  
}
