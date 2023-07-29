import {AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, AfterViewInit {
  sidenavHeight: number = 0;

  constructor(private elementRef: ElementRef, private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
  }

  toggleFullscreen() {
    const doc = window.document;
    const docEl = doc.documentElement;
    const requestFullScreen = docEl.requestFullscreen;
    const exitFullScreen = doc.exitFullscreen;
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

  ngAfterViewInit(): void {
    this.cdr.detectChanges();
    this.sidenavHeight = window.innerHeight - 180;
    this.cdr.detectChanges();
    console.log(this.sidenavHeight);
  }

}
