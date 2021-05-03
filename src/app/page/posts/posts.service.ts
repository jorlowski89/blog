import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  resourseUrl = 'http://localhost:3000/posts';

  constructor(private httpClient: HttpClient) { }

  getPosts() {
    return this.httpClient.get(this.resourseUrl).toPromise();
  }

  getPostsArr(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.resourseUrl);
  }

  addPost(post: Post) {
    return this.httpClient.post(this.resourseUrl, post).toPromise();
  }

  deletePost(post: Post) {
    return this.httpClient.delete(`${this.resourseUrl}/${post}`).toPromise()
  }
}
