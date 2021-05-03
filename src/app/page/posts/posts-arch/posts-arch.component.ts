import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-posts-arch',
  templateUrl: './posts-arch.component.html',
  styleUrls: ['./posts-arch.component.scss']
})
export class PostsArchComponent {

  public ELEMENT_DATA: Post[]
  constructor(private postService: PostsService) { }

  ngOnInit(): void {
    this.postService.getPostsArr().subscribe(res => {
      this.ELEMENT_DATA = res
    })
  }

  displayedColumns: string[] = ['id', 'title', 'text', 'btn'];

  deletePost(index): void {
    this.postService.deletePost(index)
      .then(() => window.location.reload())
  }
}
