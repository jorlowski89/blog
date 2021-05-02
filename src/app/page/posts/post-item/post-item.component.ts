import { Component, Input } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent {
  @Input('data') post: Post;

}
