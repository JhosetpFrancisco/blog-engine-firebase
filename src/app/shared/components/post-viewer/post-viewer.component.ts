import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostBlogService } from 'src/app/shared/services/post-blog.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Post } from '../../services/post';

@Component({
  selector: 'app-post-viewer',
  templateUrl: './post-viewer.component.html',
  styleUrls: ['./post-viewer.component.scss'],
})
export class PostViewerComponent implements OnInit {
  public post$: Observable<Post>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postBlogService: PostBlogService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) =>
      this.postBlogService
        .getPostbyUid(params['uid'])
        .then((post) => (this.post$ = post))
        .catch((err) => console.log(err))
    );
  }
}
