import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutsModule } from 'src/app/layouts/layouts.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TextEditorModule } from 'src/app/shared/components/post-blog/text-editor/text-editor.module';

// Firebase services + enviorment module
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment as env } from '../environments/environment';

// Services
import { AuthService } from './shared/services/auth.service';
import { PostBlogService } from './shared/services/post-blog.service';

/** WYSIWYG Quill */
import { QuillModule } from "ngx-quill";
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutsModule,
    SharedModule,
    TextEditorModule,
    AngularFireModule.initializeApp(env.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    /** WYSIWYG Quill */
    QuillModule.forRoot(),
  ],
  providers: [AuthService, PostBlogService],
  bootstrap: [AppComponent],
})
export class AppModule {}
