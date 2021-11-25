import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatProgressSpinnerModule, MatTooltipModule } from '@angular/material';

import { PhotoViewerComponent } from './photo-viewer.component';

@NgModule({
  declarations: [PhotoViewerComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ],
  exports: [PhotoViewerComponent]
})
export class PhotoViewerModule { }
