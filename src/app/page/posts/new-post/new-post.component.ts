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
  showErrors: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private postsService: PostsService,
  ) { }

  ngOnInit(): void {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.minLength(5)],
      text: '',
    })
  }


  save(): void {
    this.showErrors = true;

    const formValue = this.postForm.getRawValue();
    const post = {
      ...formValue
    }

    if (this.postForm.valid) {
      console.log('publikuję post');
      this.postsService.addPost(post)
        .then(response => {
          console.log('Kanapka zapisana', response);
          this.showErrors = false;
          // this.reset()
        })
    }
  }

}
