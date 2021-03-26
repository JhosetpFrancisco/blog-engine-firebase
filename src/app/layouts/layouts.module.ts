import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { InicioComponent } from './dashboard/views/inicio/inicio.component';
import { BlogComponent } from './dashboard/views/blog/blog.component';
import { StorageComponent } from './dashboard/views/storage/storage.component';

@NgModule({
  declarations: [
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    InicioComponent,
    BlogComponent,
    StorageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
  ],
})
export class LayoutsModule {}
