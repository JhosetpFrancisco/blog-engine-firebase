import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'comp-post-blog',
  templateUrl: './post-blog.component.html',
  styleUrls: ['./post-blog.component.scss'],
})
export class PostBlogComponent implements OnInit {
  richTextForm: FormGroup;

  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.richTextForm = this._fb.group({
      title: ['', Validators.required],
      description: [
        `Escriba su post aquí`,
      ],
    });
  }

  get descriptionRichControl() {
    return this.richTextForm.controls.description as FormControl;
  }

  onSubmit() {
    console.warn(this.richTextForm.value);
  }
}
