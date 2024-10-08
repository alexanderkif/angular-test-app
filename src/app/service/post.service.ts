import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../types/post';

const postsBaseURL = 'https://jsonplaceholder.typicode.com';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(limit: number = 50): Observable<Post[]> {
    return this.http.get<Post[]>(`${postsBaseURL}/posts?_limit=${limit}`);
  }

  getPost(id: string): Observable<Post> {
    return this.http.get<Post>(`${postsBaseURL}/posts/${id}`);
  }
}
