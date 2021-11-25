import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTabsModule, MatTooltipModule } from '@angular/material';

import { TreeTabGroupComponent } from './tree-tab-group.component';
import { TreeViewerModule } from '../tree-viewer/tree-viewer.module';

@NgModule({
  declarations: [TreeTabGroupComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    MatTooltipModule,
    TreeViewerModule
  ],
  exports: [TreeTabGroupComponent]
})
export class TreeTabGroupModule { }
