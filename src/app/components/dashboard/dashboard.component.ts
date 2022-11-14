import {
  OnInit,
  Component,
  OnDestroy,
  Renderer2,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { SharedService } from 'src/app/shared/service/shared.service';
import { SelectionModel } from '@angular/cdk/collections';
import { FlatTreeControl } from '@angular/cdk/tree';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';
import { TreeDataService } from './tree-data.service';

import { MatTreeNestedDataSource } from '@angular/material/tree';
import { TreeFunctionService } from './tree-function.service';

import { NestedTreeControl } from '@angular/cdk/tree';
import { TreeData } from './tree-data.model';
import { filter, of as observableOf } from 'rxjs';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, AfterViewInit, OnDestroy {
  // -------------------------- Tree Start------------------------------------------------------------------
  nestedTreeControl!: NestedTreeControl<TreeData>;
  nestedDataSource!: MatTreeNestedDataSource<TreeData>;

  // -------------------------- Tree End------------------------------------------------------------------

  leftSidenavWidth = 30;
  contentWidth = 70;
  activeNode: TreeData | undefined;

  ngOnInit(): void {
    this.nestedTreeControl = new NestedTreeControl<TreeData>(this._getChildren);
    this.nestedDataSource = new MatTreeNestedDataSource<TreeData>();

    this.dataService._dataChange.subscribe((data) => {
      console.log(this.nestedDataSource, this.nestedTreeControl);

      this.nestedDataSource.data = data;
      this.nestedTreeControl.dataNodes = data;

      this.nestedTreeControl.expandAll();
      Object.keys(this.nestedDataSource.data).forEach((key) => {
        this.setParent(data[key as unknown as number], null);
      });
    });

    if (this.urlData.id == 1) {
      let urlId: number = this.urlData.url.substring(
        this.urlData.url.lastIndexOf('/') + 1
      );
      this.findActiveNode(this.nestedDataSource.data, urlId);
    }
  }

  findActiveNode(data: TreeData[], urlId: number) {
    let an: TreeData;
    data.forEach((e, index) => {
      if (e.id == urlId) {
        this.activeNode = data[index];
      } else if (e.children) {
        this.findActiveNode(e.children, urlId);
      }
    });
  }

  private _getChildren = (node: TreeData) => observableOf(node.children);
  hasNestedChild = (_: number, nodeData: TreeData) =>
    !!nodeData.children && nodeData.children.length > 0;

  ngAfterViewInit() {}
  showFiller = false;
  urlData: any;
  canvasId = {};
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public sharedService: SharedService,
    private renderer: Renderer2,
    private dataService: TreeDataService,
    private treeFunctionService: TreeFunctionService
  ) {
    // this will check reload
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.urlData = event;
      });
  }

  ngOnDestroy(): void {}

  refreshTreeData() {
    const data = this.nestedDataSource.data;
    this.nestedDataSource.data = [];
    this.nestedDataSource.data = data;
  }

  submit() {
    let result = this.nestedDataSource.data.reduce(
      (acc: string[], node: TreeData) =>
        acc.concat(
          this.nestedTreeControl
            .getDescendants(node)
            .filter((descendant) => descendant.selected)
            .map((descendant) => descendant.name)
        ),
      [] as string[]
    );
    console.log(result);
  }

  itemToggle(checked: boolean, node: TreeData) {
    node.selected = checked;
    if (node.children) {
      node.children.forEach((child) => {
        this.itemToggle(checked, child);
      });
    }
    this.checkAllParents(node);
  }

  checkAllParents(node: TreeData) {
    if (node.parent) {
      const descendants = this.nestedTreeControl.getDescendants(node.parent);
      node.parent.selected = descendants.every((child) => child.selected);
      node.parent.indeterminate = descendants.some((child) => child.selected);
      this.checkAllParents(node.parent);
    }
  }

  setParent(node: TreeData, parent: TreeData | any) {
    node.parent = parent;
    if (node.children) {
      node.children.forEach((ChildNode) => {
        this.setParent(ChildNode, node);
      });
    }
  }

  addNewItem(node: any) {}

  searchText = '';
  onClearSearch() {
    this.searchText = '';
    this.refreshTreeData();
  }

  setChildOk(text: string, node: TreeData[]) {
    node.forEach((x: TreeData) => {
      x.ok = x.name.toLowerCase().indexOf(text.toLowerCase()) >= 0;
      if (x.parent) this.setParentOk(text, x.parent, x.ok);
      if (x.children) this.setChildOk(text, x.children);
    });
  }
  setParentOk(text: string, node: TreeData, ok: boolean) {
    node.ok =
      ok || node.ok || node.name.toLowerCase().indexOf(text.toLowerCase()) >= 0;
    if (node.parent) this.setParentOk(text, node.parent, node.ok);
  }

  //For check the values
  getList2(node: TreeData[], result: any = null) {
    result = result || {};
    node.forEach((x: TreeData) => {
      result[x.name] = {};
      result[x.name].ok = x.ok;
      if (x.children) result[x.name].children = this.getList2(x.children);
    });
    return result;
  }
  //Another way to check the values, we can not use {{datasource.node}}
  getList(node: TreeData[]) {
    return node.map((x: any) => {
      const r: any = {
        name: x.name + ' - ' + x.ok,
        children: x.children ? this.getList(x.children) : null,
      };
      if (!r.children) delete r.children;
      return r;
    });
  }

  onClickNode(node: TreeData, isChild: string) {
    console.log(node);
    // let str = JSON.parse(JSON.stringify(node));
    localStorage.setItem('activeNodeId', JSON.stringify(node.id));
  }

  grandParent: TreeData = {
    id: 0,
    name: '',
    description: '',
    children: [],
    selected: false,
    indeterminate: false,
    parent: undefined,
    ok: false,
  };
  addDialog(isTop: string, currentNode: TreeData, action: string): void {
    this.onClearSearch();
    console.log(isTop, currentNode, action);

    // const dialogRef = this.dialog.open(AddComponent, {
    //   width: '500px',
    //   data: {
    //     allData: this.nestedDataSource.data,
    //     currentNode: currentNode,
    //     MenuId: null,
    //     MenuData: null,
    //     MenuDesc: null,
    //     children: [],
    //     Action: action,
    //     isTop: isTop,
    //   },
    //   disableClose: true,
    // });
  }

  pokemonControl = new FormControl('');
  pokemonGroups: PokemonGroup[] = [
    {
      name: 'Grass',
      pokemon: [
        { value: 'bulbasaur-0', viewValue: 'Bulbasaur' },
        { value: 'oddish-1', viewValue: 'Oddish' },
        { value: 'bellsprout-2', viewValue: 'Bellsprout' },
      ],
    },
    {
      name: 'Water',
      pokemon: [
        { value: 'squirtle-3', viewValue: 'Squirtle' },
        { value: 'psyduck-4', viewValue: 'Psyduck' },
        { value: 'horsea-5', viewValue: 'Horsea' },
      ],
    },
    {
      name: 'Fire',
      disabled: true,
      pokemon: [
        { value: 'charmander-6', viewValue: 'Charmander' },
        { value: 'vulpix-7', viewValue: 'Vulpix' },
        { value: 'flareon-8', viewValue: 'Flareon' },
      ],
    },
    {
      name: 'Psychic',
      pokemon: [
        { value: 'mew-9', viewValue: 'Mew' },
        { value: 'mewtwo-10', viewValue: 'Mewtwo' },
      ],
    },
  ];
}

interface Pokemon {
  value: string;
  viewValue: string;
}

interface PokemonGroup {
  disabled?: boolean;
  name: string;
  pokemon: Pokemon[];
}
