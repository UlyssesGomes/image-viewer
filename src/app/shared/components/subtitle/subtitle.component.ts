import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-subtitle',
  templateUrl: './subtitle.component.html',
  styleUrls: ['./subtitle.component.scss']
})
export class SubtitleComponent implements OnInit {

  isOpened = true;

  githubPath = environment.githubPath;

  @Input() fileItems = [];

  constructor() { }

  ngOnInit() {
  }

  openSubtitle() {
    this.isOpened = !this.isOpened;
  }

}
