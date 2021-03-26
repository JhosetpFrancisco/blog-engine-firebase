import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostBlogService } from 'src/app/shared/services/post-blog.service';
import { Post } from 'src/app/shared/services/post';

@Component({
  selector: 'comp-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss'],
})
export class PostsListComponent implements OnInit {
  posts$: Observable<Post[]>;

  constructor(private postBlogService: PostBlogService) {}

  ngOnInit(): void {
    this.posts$ = this.postBlogService.post;
  }
}
