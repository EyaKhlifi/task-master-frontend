import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleFullscreen() {
    const doc = window.document;
    const docEl = doc.documentElement;
    const requestFullScreen =docEl.requestFullscreen;
    const exitFullScreen =doc.exitFullscreen;
    if (!doc.fullscreenElement) {
      if (requestFullScreen) {
        requestFullScreen.call(docEl);
      }
    } else {
      if (exitFullScreen) {
        exitFullScreen.call(doc);
      }
    }
  }

}
