import { AddEditNodesDialogComponent } from './dialogs/add-edit-nodes-dialog/add-edit-nodes-dialog.component';
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
import {
  dialogDataTreeNode,
  MenuType,
  TreeData,
  treeMenuDetails,
} from './tree-data.model';
import { filter, of as observableOf } from 'rxjs';
import { UntypedFormControl } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

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

  menuData: MenuType = {
    parent: [
      {
        nodeType: 'parent',
        label: 'add',
        icon: 'add',
        operation: 'add',
        dialogHeaderName: '',
      },
      {
        nodeType: 'parent',
        label: 'rename',
        icon: 'edit',
        operation: 'rename',
        dialogHeaderName: '',
      },
      {
        nodeType: 'parent',
        label: 'clone',
        icon: 'folder',
        operation: 'clone',
        dialogHeaderName: '',
      },
      {
        nodeType: 'parent',
        label: 'move',
        icon: 'edit',
        operation: 'move',
        dialogHeaderName: '',
      },
      {
        nodeType: 'parent',
        label: 'delete',
        icon: 'delete',
        operation: 'delete',
        dialogHeaderName: '',
      },
    ],
    child: [
      {
        nodeType: 'child',
        label: 'rename',
        icon: 'edit',
        operation: 'rename',
        dialogHeaderName: '',
      },
      {
        nodeType: 'child',
        label: 'move',
        icon: 'edit',
        operation: 'move',
        dialogHeaderName: '',
      },
      {
        nodeType: 'child',
        label: 'clone',
        icon: 'folder',
        operation: 'clone',
        dialogHeaderName: '',
      },
      {
        nodeType: 'child',
        label: 'delete',
        icon: 'delete',
        operation: 'delete',
        dialogHeaderName: '',
      },
    ],
  };

  leftSidenavWidth = 30;
  contentWidth = 70;
  activeNode: TreeData | undefined;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public sharedService: SharedService,
    private renderer: Renderer2,
    private dataService: TreeDataService,
    public dialog: MatDialog,
    public treeFunctionService: TreeFunctionService
  ) {
    // this will check reload
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.urlData = event;
      });
  }

  ngOnInit(): void {
    this.nestedTreeControl = new NestedTreeControl<TreeData>(this._getChildren);
    this.nestedDataSource = new MatTreeNestedDataSource<TreeData>();

    this.dataService._dataChange.subscribe((data) => {
      this.nestedDataSource.data = data;
      this.nestedTreeControl.dataNodes = data;
      this.nestedTreeControl.expandAll();
      Object.keys(this.nestedDataSource.data).forEach((key) => {
        this.setParent(data[key as unknown as number], null);
      });
    });
    console.log(this.nestedDataSource.data);



    if (this.urlData.id == 1) {
      let urlId: number = this.urlData.url.substring(
        this.urlData.url.lastIndexOf('/') + 1
      );
      this.findActiveNode(this.nestedDataSource.data, urlId);
      console.log('activeNode', this.activeNode);
    }
  }

  findActiveNode(data: TreeData[], urlId: number) {
    data.forEach((e, index) => {
      if (e.id == urlId) {
        this.activeNode = data[index];
        this.activeNode.selected = true;
        this.activeNode.newInserted = true;
      } else if (e.children) {
        this.findActiveNode(e.children, urlId);
      }
    });


  }

  private _getChildren = (node: TreeData) => observableOf(node.children);
  hasNestedChild = (_: number, nodeData: TreeData) =>
    !!nodeData.children && nodeData.children.length > 0;

  ngAfterViewInit() { }
  showFiller = false;
  urlData: any;
  canvasId = {};

  ngOnDestroy(): void { }

  refreshTreeData() {
    const data = this.nestedDataSource.data;
    this.nestedDataSource.data = [];
    this.nestedDataSource.data = data;
  }

  resetInitialValues(node: TreeData[]) {
    node.forEach(item => {
      item.newInserted = false;
      item.selected = false;
      if (item.children) {
        this.resetInitialValues(item.children);
      }
    })
  }

  submit() {
    let result = this.nestedDataSource.data.reduce(
      (acc: string[], node: TreeData) =>
        acc.concat(
          this.nestedTreeControl
            .getDescendants(node)
            .filter((descendant) => descendant.checked)
            .map((descendant) => descendant.name)
        ),
      [] as string[]
    );
    console.log(result);
  }

  itemToggle(checked: boolean, node: TreeData) {
    node.checked = checked;
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
      node.parent.checked = descendants.every((child) => child.checked);
      node.parent.indeterminate = descendants.some((child) => child.checked);
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

  addNewItem(node: any) { }

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
    this.resetInitialValues(this.nestedDataSource.data);
    node.selected = true;
    let data = {
      checked: node.checked,
      children: [],
      description: node.description,
      id: node.id,
      indeterminate: node.indeterminate,
      name: node.name,
      newInserted: node.newInserted,
      nodeType: node.nodeType,
      ok: node.ok,
      parent: {},
      path: node.path,
      selected: node.selected
    }
    localStorage.setItem('activeNodeId', JSON.stringify(data));
  }

  onClickMenuAction(
    currentNode: TreeData | undefined,
    menu: treeMenuDetails | undefined
  ) {
    // console.log(currentNode, menu);
    this.onClearSearch();
    const data: dialogDataTreeNode = {
      menu: menu,
      currentNode: currentNode,
      allData: this.nestedDataSource.data,
    };
    const dialogRef = this.dialog.open(AddEditNodesDialogComponent, {
      width: '500px',
      disableClose: true,
      enterAnimationDuration: '300ms',
      exitAnimationDuration: '300ms',
      data: data,
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);

      if (result.update) {
        if (result.operation == 'add') {
          this.resetInitialValues(this.nestedDataSource.data);
          if (currentNode) {
            currentNode?.children.push(result.data);
            this.nestedTreeControl.expand(currentNode);
          } else {
            this.nestedDataSource.data.push(result.data);
          }
          this.dataService._dataChange.next(this.nestedDataSource.data);
          // this.refreshTreeData();
        } else if (result.operation == 'rename') {
          // currentNode = result.data;
          // this.dataService._dataChange.next(this.nestedDataSource.data);

        }

      }
    });
  }


  pokemonControl = new UntypedFormControl('');
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
