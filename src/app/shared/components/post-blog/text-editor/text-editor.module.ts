import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { TextEditorComponent } from './text-editor.component';
/** WYSIWYG Quill */
import { QuillModule } from 'ngx-quill';

@NgModule({
  declarations: [TextEditorComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    /** WYSIWYG Quill */
    QuillModule,
  ],
  exports: [TextEditorComponent],
})
export class TextEditorModule {}
