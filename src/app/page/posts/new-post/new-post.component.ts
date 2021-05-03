import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostsService } from '../posts.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {
  postForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private postsService: PostsService,
  ) { }

  ngOnInit(): void {
    this.postForm = this.formBuilder.group({
      title: '',
      text: '',
    })
  }


  save(): void {
    const formValue = this.postForm.getRawValue();
    const post = { ...formValue }
    this.postsService.addPost(post)
    this.postsService.getPosts()
    window.location.reload();
  }
}
