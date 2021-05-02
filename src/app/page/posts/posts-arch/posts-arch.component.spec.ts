import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsArchComponent } from './posts-arch.component';

describe('PostsArchComponent', () => {
  let component: PostsArchComponent;
  let fixture: ComponentFixture<PostsArchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsArchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsArchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
