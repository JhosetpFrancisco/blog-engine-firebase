import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignInComponent } from 'src/app/layouts/sign-in/sign-in.component';
import { SignUpComponent } from 'src/app/layouts/sign-up/sign-up.component';
import { DashboardComponent } from 'src/app/layouts/dashboard/dashboard.component';
import { InicioComponent } from 'src/app/layouts/dashboard/views/inicio/inicio.component';
import { BlogComponent } from 'src/app/layouts/dashboard/views/blog/blog.component';
import { StorageComponent } from 'src/app/layouts/dashboard/views/storage/storage.component';

import { PostsListComponent } from 'src/app/shared/components/posts-list/posts-list.component';
import { PostBlogComponent } from 'src/app/shared/components/post-blog/post-blog.component';
import { PostViewerComponent } from 'src/app/shared/components/post-viewer/post-viewer.component';

import { AuthGuard } from 'src/app/shared/guard/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'inicio',
        component: InicioComponent,
      },
      {
        path: 'blog',
        component: BlogComponent,
        children: [
          {
            path: '',
            component: PostsListComponent,
          },
          {
            path: 'create',
            component: PostBlogComponent,
          },
          {
            path: ':uid',
            component: PostViewerComponent,
          },
          {
            path: ':uid/edit',
            component: PostBlogComponent,
          },
        ],
      },
      {
        path: 'storage',
        component: StorageComponent,
      },
      { path: '**', redirectTo: 'inicio' },
    ],
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
