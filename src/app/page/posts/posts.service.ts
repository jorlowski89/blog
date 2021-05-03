import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

  addPost(post: Post) {
    return this.httpClient.post(this.resourseUrl, post).toPromise();
  }
}
