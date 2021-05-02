import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './posts/posts.component';
import { PostsArchComponent } from './posts/posts-arch/posts-arch.component';
import { ContactComponent } from './contact/contact.component';
import { NewPostComponent } from './posts/new-post/new-post.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    HomeComponent,
    PostsComponent,
    PostsArchComponent,
    ContactComponent,
    NewPostComponent,],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    MatDialogModule
  ]
})
export class PageModule { }
