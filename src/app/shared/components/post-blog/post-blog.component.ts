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

@Component({
  selector: 'comp-post-blog',
  templateUrl: './post-blog.component.html',
  styleUrls: ['./post-blog.component.scss'],
})
export class PostBlogComponent implements OnInit {
  richTextForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private postBlogService: PostBlogService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.richTextForm = this._fb.group({
      uid: [uuidv4()],
      title: ['', Validators.required],
      description: [`Escriba su post aquí`],
    });
  }

  get descriptionRichControl() {
    return this.richTextForm.controls.description as FormControl;
  }

  onSubmit() {
    console.warn(this.richTextForm.value);
    this.postBlogService.postBlog(this.richTextForm.value);
    this.router.navigate(['/dashboard/blog']);
  }
}
