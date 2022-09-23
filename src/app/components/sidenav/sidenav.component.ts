import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef,OnInit, Component, OnDestroy} from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, OnDestroy {

  color: ThemePalette = "accent";
  checked = false;
  disabled = false;

  isDarkTheme = true;
  toggleTheme () {
    this.isDarkTheme = !this.isDarkTheme;
  }


  ngOnInit(): void {
  }
  mobileQuery: MediaQueryList;

  fillerNav = Array.from({length: 25}, (_, i) => `Nav Item ${i + 1}`);

  fillerContent = Array.from(
    {length: 25},
    () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  );

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    // this.mobileQuery.addListener(this._mobileQueryListener);
    
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
      mql.addEventListener("change", () => {
        this._mobileQueryListener;
      });
      // this.fillerNav[5]='asdfghjklytrewesdfghjklkjfgfsdghjkravvsdfghjklsdfghjklsdfghjkty'
  }

  ngOnDestroy(): void {
    // this.mobileQuery.removeListener(this._mobileQueryListener);
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    mql.removeEventListener("change", () => {
      this._mobileQueryListener;
    });
  }


  // sizeBar ----------------------start----------------------

  leftContainerWidth = 100;
  mouseDownOnHandle: boolean = false;
  
  changeResizeMode(value: boolean): void{
    this.mouseDownOnHandle = value;
  }
  changeLeftContainerWidth(event: MouseEvent): void{
    if(this.mouseDownOnHandle){
      this.leftContainerWidth = event.clientX - 10;
    }
  }

  // sizeBar ----------------------end ----------------------

  // tiles: Tile[] = [
  //   {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
  //   {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
  //   {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
  //   {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  // ];

}

// export interface Tile {
//   color: string;
//   cols: number;
//   rows: number;
//   text: string;
// }
