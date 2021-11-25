import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatProgressSpinnerModule } from '@angular/material';

import { PhotoViewerModule } from 'src/app/shared/components/photo-viewer/photo-viewer.module';
import { SubtitleModule } from 'src/app/shared/components/subtitle/subtitle.module';
import { TreeViewerComponent } from './tree-viewer.component';

@NgModule({
  declarations: [TreeViewerComponent],
  imports: [
    CommonModule,
    PhotoViewerModule,
    SubtitleModule,
    MatProgressSpinnerModule
  ],
  exports: [ TreeViewerComponent ]
})
export class TreeViewerModule { }
