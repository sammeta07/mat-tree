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
import { of as observableOf } from 'rxjs';

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

  ngOnInit(): void {
    this.nestedTreeControl = new NestedTreeControl<TreeData>(this._getChildren);
    this.nestedDataSource = new MatTreeNestedDataSource();
    this.dataService._dataChange.subscribe((data) => {
      this.nestedDataSource.data = data;
      Object.keys(data).forEach((key) => {
        this.setParent(data[key as unknown as number], null);
      });
    });
  }

  private _getChildren = (node: TreeData) => observableOf(node.children);
  hasNestedChild = (_: number, nodeData: TreeData) =>
    nodeData.children.length > 0;

  ngAfterViewInit() {}
  showFiller = false;
  constructor(
    public sharedService: SharedService,
    private renderer: Renderer2,
    private dataService: TreeDataService,
    private treeFunctionService: TreeFunctionService
  ) {}

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
    console.log(node);

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

  // setChildOk(text: string, node: TreeData[]) {
  //   this.nestedTreeControl.expandAll();
  //   text = text.toLowerCase();
  //   node.forEach((x) => {
  //     x.MenuData = x.MenuData.toLowerCase();
  //     x.ok = x.MenuData.indexOf(text) >= 0;
  //     if (x.parent) {
  //       this.setParentOk(text, x.parent, x.ok);
  //     }
  //     if (x.children) {
  //       this.setChildOk(text, x.children);
  //     }
  //   });
  // }

  // setParentOk(text: string, node: TreeData, ok: boolean) {
  //   node.ok = node.ok || ok || node.name.indexOf(text) >= 0;
  //   if (node.parent) {
  //     this.setParentOk(text, node.parent, node.ok);
  //   }
  // }
}
