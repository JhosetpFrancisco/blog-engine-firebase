import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { QuillConfiguration } from "./quill-configuration";
import Quill from 'quill';
import { ImageResize } from "quill-image-resize";

@Component({
  selector: 'text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.scss']
})
export class TextEditorComponent implements OnInit {

  quillConfiguration = QuillConfiguration;
  @Input() control: FormControl;
  constructor() {}

  ngOnInit() {
    console.log(Quill);
    this.control = this.control ?? new FormControl();
  }

}
