import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  resourseUrl = 'http://localhost:3000/posts';

  constructor(private httpClien: HttpClient) { }

  getPosts() {
    return this.httpClien.get(this.resourseUrl).toPromise();
  }
}
