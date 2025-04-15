import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiPostsService {
  private apiUrl = 'http://localhost:5000/posts';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  addPost(postData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl + '/add', postData);
  }
}
