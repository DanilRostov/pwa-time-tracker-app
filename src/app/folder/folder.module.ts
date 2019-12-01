import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FolderComponent } from './components/folder/folder.component';

@NgModule({
  declarations: [FolderComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class FolderModule { }
