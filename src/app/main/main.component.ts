import {Component, HostListener, OnInit} from '@angular/core';
import {bounceInDownOnEnterAnimation, pulseAnimation, pulseOnEnterAnimation, rubberBandAnimation} from 'angular-animations';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations:[
    bounceInDownOnEnterAnimation({anchor:"pulse0",duration:4000})
  ]
})
export class MainComponent implements OnInit {
  anim=true
  isMobile = false;
  gutterSize = "10rem";
  rowHeight = "30rem";
  images=["assets/gen1.jpg","assets/gen1.jpg","assets/gen1.jpg"]
  private screenHeight: number;
  private screenWidth: number;
  constructor() {
    this.onResize();
  }

  ngOnInit(): void {
  }


  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.screenHeight = window.innerHeight;
    this.screenWidth = window.innerWidth;
    if(this.screenWidth < 480){
      this.isMobile=true;
      this.rowHeight="15rem"
      this.gutterSize="5rem"
    }
    else{
      this.isMobile=false
      this.gutterSize = "10rem";
      this.rowHeight = "30rem";
    }
    console.log(this.screenWidth);
  }

  scrollTo(el:HTMLElement) {
    el.scrollIntoView({behavior:"smooth"})
  }
}
