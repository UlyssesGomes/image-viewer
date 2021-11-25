import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-photo-viewer',
  templateUrl: './photo-viewer.component.html',
  styleUrls: ['./photo-viewer.component.scss'],
})
export class PhotoViewerComponent implements OnInit, AfterViewInit {

  @Input() title = '';
  @Input() imageName = '';

  // TODO - look a way to get result, lens and img by viewchild.
  // @ViewChild('imageSubframe') result;
  // @ViewChild('lens') lens;
  // @ViewChild('img') img;

  imgId = 'image-map';
  resultId = 'image-subframe';

  img;
  lens;
  result;
  cx;
  cy;
  @Input()
  lensAspectRatio = 70;

  mapMaxSize = 300 * 0.7

  fixedLens = false;

  isReady = true;

  constructor() { }

  ngOnInit() {
    // this.img = document.getElementById(this.imgId);    
    // this.result = document.getElementById(this.resultId);
    // console.log('carregou result? ', this.result);
    // this.lens = document.getElementById('lens');
    // console.log('carregou lens? ', this.lens);
    // setTimeout(() => this.callLater(), 1500);
  }
  
  ngAfterViewInit() {
    setTimeout(
      () => this.loadingElements(),
      500
    );
  }

  loadingElements() {
    do {
      this.img = document.getElementById(this.imgId);
    } while (this.img === null)

    do {
      this.result = document.getElementById(this.resultId);
    } while (this.result === null)

    do {
      this.lens = document.getElementById('lens');
    } while (this.lens === null)

    setTimeout(() => this.callLater(), 500);
  }

  callLater() {
    /*set lens ration based on result dimensions.*/    
    this.getLensAspectRatio(this.result.offsetWidth, this.result.offsetHeight);
    
    /*calculate the ratio between result DIV and lens:*/
    this.cx = this.result.offsetWidth / this.lens.offsetWidth;
    this.cy = this.result.offsetHeight / this.lens.offsetHeight;
    /*set background properties for the result DIV:*/
    this.result.style.backgroundImage = "url('" + this.img.src + "')";
    this.result.style.backgroundRepeat = "no-repeat"
    const miniaturesSizes = this.getMiniatureImageDimensions();
    this.result.style.backgroundSize = (miniaturesSizes.width * this.cx) + "px " + (miniaturesSizes.height * this.cy) + "px";
    /*execute a function when someone moves the cursor over the image, or the lens:*/
    this.lens.addEventListener("mousemove", this.moveLens.bind(this));
    this.img.addEventListener("mousemove", this.moveLens.bind(this));
    /*and also for touch screens:*/
    this.lens.addEventListener("touchmove", this.moveLens.bind(this));
    this.img.addEventListener("touchmove", this.moveLens.bind(this));

    this.lens.addEventListener("click", this.clickEvent.bind(this));
    this.img.addEventListener("click", this.clickEvent.bind(this));
    /*set lens initial position at image center*/
    this.setLensToCenter();
  }

  public moveLens(e) {

    if(!this.fixedLens) {
      var pos, x, y;
      /*prevent any other actions that may occur when moving over the image:*/
      e.preventDefault();
      /*get the cursor's x and y positions:*/
      pos = this.getCursorPos(e);
      /*calculate the position of the lens:*/
      x = pos.x - (this.lens.offsetWidth / 2);
      y = pos.y - (this.lens.offsetHeight / 2);
      /*prevent the lens from being positioned outside the image:*/
      if (x > this.img.width - this.lens.offsetWidth) { x = this.img.width - this.lens.offsetWidth; }
      if (x < 0) { x = 0; }
      if (y > this.img.height - this.lens.offsetHeight) { y = this.img.height - this.lens.offsetHeight; }
      if (y < 0) { y = 0; }
      /*set the position of the lens:*/
      this.lens.style.left = x + "px";
      this.lens.style.top = y + "px";
      /*display what the lens "sees":*/
      this.result.style.backgroundPosition = "-" + (x * this.cx) + "px -" + (y * this.cy) + "px";
    }
  }

  getCursorPos(e) {
    let a, x = 0, y = 0;
    e = e || window.event;
    /*get the x and y positions of the image:*/
    a = this.img.getBoundingClientRect();
    /*calculate the cursor's x and y coordinates, relative to the image:*/
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /*consider any page scrolling:*/
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return { x: x, y: y };
  }

  getLensAspectRatio(w, h) {
    let lenWidth, lenHeight;
    if (w > h) {
      lenWidth = `${this.lensAspectRatio}px`;
      lenHeight = ((this.lensAspectRatio * h) / w) + 'px';

    } else if (h > w) {
      lenHeight = `${this.lensAspectRatio}px`;
      lenWidth = ((this.lensAspectRatio * w) / h) + 'px';
    }

    this.lens.style.width = lenWidth;
    this.lens.style.height = lenHeight;

    this.isReady = false;
  }

  setLensToCenter() {
    const miniaturesSizes = this.getMiniatureImageDimensions();
    
    const x = miniaturesSizes.width / 2;
    const y = miniaturesSizes.height / 2;

    this.lens.style.left = (x - this.lens.offsetWidth / 2) + 'px';
    this.lens.style.top = (y - this.lens.offsetHeight / 2) + 'px';

    this.result.style.backgroundPosition = "-" + ((x - this.lens.offsetWidth / 2) * this.cx) 
    + "px -" + ((y - this.lens.offsetHeight / 2) * this.cy) + "px";
  }

  clickEvent(e) {
    this.fixedLens = !this.fixedLens;
    if(!this.fixedLens) {
      this.moveLens(e);
    }
  }

  getMiniatureImageDimensions() {
    let width, height;
    this.img.naturalHeight;
    this.img.naturalWidth;

    if (this.img.naturalWidth > this.img.naturalHeight) {
      width = this.mapMaxSize;
      height = this.mapMaxSize * (this.img.naturalHeight/this.img.naturalWidth);
    } else if (this.img.naturalHeight > this.img.naturalWidth) {
      height = this.mapMaxSize;
      width = this.mapMaxSize * (this.img.naturalWidth/this.img.naturalHeight);
    } else {
      width = height = this.mapMaxSize;
    }

    this.img.style.width = Math.round(width) + 'px';
    this.img.style.height = Math.round(height) + 'px';

    return {
      width: width,
      height: height
    };
  }
}
