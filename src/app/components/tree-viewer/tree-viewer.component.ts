import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tree-viewer',
  templateUrl: './tree-viewer.component.html',
  styleUrls: ['./tree-viewer.component.scss']
})
export class TreeViewerComponent implements OnInit {

  @Input() isActive = false;
  @Input() nodeView: any;

  constructor() { }

  ngOnInit() {
  }

}
