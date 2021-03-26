import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';
import { PostBlogService } from 'src/app/shared/services/post-blog.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Post } from '../../services/post';

@Component({
  selector: 'comp-post-blog',
  templateUrl: './post-blog.component.html',
  styleUrls: ['./post-blog.component.scss'],
})
export class PostBlogComponent implements OnInit {
  public richTextForm: FormGroup;
  public post$: Post;
  public isEdit: boolean = false;

  constructor(
    private _fb: FormBuilder,
    private postBlogService: PostBlogService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.subscribe((params) => {
      if (params['uid']) {
        this.isEdit = true;
        this.postBlogService
          .getPostbyUid(params['uid'])
          .then((post) => {
            this.post$ = post;
            this.setFormGroup();
          })
          .catch((err) => console.log(err));
      }
    });
  }

  ngOnInit(): void {
    if (!this.isEdit) this.setFormGroup();
  }

  setFormGroup() {
    this.richTextForm = this._fb.group({
      uid: [this.post$?.uid || uuidv4()],
      title: [this.post$?.title || '', Validators.required],
      description: [this.post$?.description || `Escriba su post aquí`],
    });
  }

  get descriptionRichControl() {
    return this.richTextForm.controls.description as FormControl;
  }

  onSubmit() {
    if (!this.isEdit) this.postBlogService.postBlog(this.richTextForm.value);
    else this.postBlogService.updatePost(this.richTextForm.value);
    this.router.navigate(['/dashboard/blog']);
  }
}
