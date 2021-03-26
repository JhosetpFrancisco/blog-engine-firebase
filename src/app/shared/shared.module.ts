import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";

/** Angular Material */
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatDialogModule } from "@angular/material/dialog";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatInputModule } from "@angular/material/input";
import { MatNativeDateModule } from "@angular/material/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatChipsModule } from "@angular/material/chips";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatBadgeModule } from "@angular/material/badge";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatMenuModule } from "@angular/material/menu";
import { MatSelectModule } from "@angular/material/select";
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from "@angular/material/sidenav";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { MatTableModule } from "@angular/material/table";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatBottomSheetModule } from "@angular/material/bottom-sheet";
import { MatListModule } from "@angular/material/list";

/* Flex Layout */
import { FlexLayoutModule } from '@angular/flex-layout';

/* Custom Modules */
import { TextEditorModule } from 'src/app/shared/components/post-blog/text-editor/text-editor.module';

/* Components */
import { PostBlogComponent } from './components/post-blog/post-blog.component';

@NgModule({
  declarations: [PostBlogComponent],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    /* Material Angular */
    MatRadioModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatSnackBarModule,
    MatBadgeModule,
    MatTooltipModule,
    MatMenuModule,
    MatSelectModule,
    MatTabsModule,
    MatCardModule,
    MatGridListModule,
    MatSlideToggleModule,
    MatSidenavModule,
    DragDropModule,
    MatTableModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatToolbarModule,
    MatBottomSheetModule,
    MatListModule,
    /* Flex Layout */
    FlexLayoutModule,
    /* Custom Modules */
    TextEditorModule,
  ],
  exports: [
    /* Material Angular */
    MatRadioModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatSnackBarModule,
    MatBadgeModule,
    MatTooltipModule,
    MatMenuModule,
    MatSelectModule,
    MatTabsModule,
    MatCardModule,
    MatGridListModule,
    MatSlideToggleModule,
    MatSidenavModule,
    DragDropModule,
    MatTableModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatToolbarModule,
    MatBottomSheetModule,
    MatListModule,
    /* Flex Layout */
    FlexLayoutModule,
    /* Components */
    PostBlogComponent,
  ]
})
export class SharedModule { }
