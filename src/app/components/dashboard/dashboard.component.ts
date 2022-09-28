import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef,OnInit, Component, OnDestroy, Renderer2, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { SharedService } from 'src/app/shared/service/shared.service';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit, AfterViewInit, OnDestroy {

  isDarkTheme = true;
  leftSidenavWidth=25;
  contentWidth=75;

  toggleTheme () {
    this.isDarkTheme = !this.isDarkTheme;
  }


  ngOnInit(): void {
  }
  mobileQuery: MediaQueryList;

  // fillerNav = Array.from({length: 25}, (_, i) => `Nav Item ${i + 1}`);

  // fillerContent = Array.from(
  //   {length: 25},
  //   () =>
  //     `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
  //      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
  //      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
  //      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
  //      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  // );

  private _mobileQueryListener: () => void;


  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();
  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;

  // @ViewChild('sizeBarGrabber', { read: ElementRef, static: false })
  // sizeBarGrabber!: ElementRef;


  // @ViewChild('sideNavContainer')
  // sideNavContainer!: ElementRef;
  

  ngAfterViewInit(){
    // let sideNavContainer = this.sideNavContainer.nativeElement;
    // console.log(sideNavContainer);
  }
  showFiller = false;
  constructor(
    public sharedService:SharedService,
    changeDetectorRef: ChangeDetectorRef, 
    media: MediaMatcher,
    private renderer: Renderer2,
    ) {

      this.dataSource.data = TREE_DATA;

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




  // tiles: Tile[] = [
  //   {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
  //   {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
  //   {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
  //   {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  // ];

}
interface FoodNode {
  name: string;
  id:number;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Fruit',
    id:1,
    children: [{name: 'Apple', id:2}, {name: 'Banana', id:3}, {name: 'Fruit loops', id:4}]
  },
  {
    name: 'Vegetables',
    id:5,
    children: [
      {
        name: 'Green',
        id:6,
        children: [{name: 'Broccoli', id:7,}, {name: 'Brussels sprouts', id:8,}],
      },
      {
        name: 'Orange',
        id:9,
        children: [{name: 'Pumpkins',  id:10,}, {name: 'Carrots',  id:11,}],
      },
    ],
  },
  {
    name: 'Vegetables',
    id:12,
    children: [
      {
        name: 'Green',
        id:13,
        children: [{name: 'Broccoli',  id:14,}, {name: 'Brussels sprouts',  id:15,}],
      },
      {
        name: 'Orange',
        id:16,
        children: [{name: 'Pumpkins',  id:17,}, {name: 'Carrots',  id:18,}],
      },
    ],
  },
];
// export interface Tile {
//   color: string;
//   cols: number;
//   rows: number;
//   text: string;
// }


