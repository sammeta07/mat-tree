import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TreeData } from './tree-data.model';
import { catchError, map } from 'rxjs/operators';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Subscription } from 'rxjs';

const TREE_DATA: TreeData[] = [
  {
    checked: false,
    children: [
      {
        checked: false,
        children: [
          {
            checked: false,
            children: [],
            description: "my c1",
            id: 116,
            indeterminate: false,
            name: "c1",
            newInserted: false,
            nodeType: "child",
            ok: false,
            parent: undefined,
            path: "vehicles/c1/",
            selected: false
          },
          {
            checked: false,
            children: [],
            description: "my c2",
            id: 117,
            indeterminate: false,
            name: "c2",
            newInserted: false,
            nodeType: "child",
            ok: false,
            parent: undefined,
            path: "vehicles/c2/",
            selected: false
          },
          {
            checked: false,
            children: [],
            description: "my c3",
            id: 118,
            indeterminate: false,
            name: "c3",
            newInserted: false,
            nodeType: "child",
            ok: false,
            parent: undefined,
            path: "vehicles/c3/",
            selected: false
          },
          {
            checked: false,
            children: [],
            description: "my c4",
            id: 119,
            indeterminate: false,
            name: "c4",
            newInserted: false,
            nodeType: "child",
            ok: false,
            parent: undefined,
            path: "vehicles/c4/",
            selected: false
          },
          {
            checked: false,
            children: [],
            description: "my c5",
            id: 120,
            indeterminate: false,
            name: "c5",
            newInserted: false,
            nodeType: "child",
            ok: false,
            parent: undefined,
            path: "vehicles/c5/",
            selected: false
          },
          {
            checked: false,
            children: [],
            description: "my c6",
            id: 121,
            indeterminate: false,
            name: "c6",
            newInserted: false,
            nodeType: "child",
            ok: false,
            parent: undefined,
            path: "vehicles/c6/",
            selected: false
          },
          {
            checked: false,
            children: [],
            description: "my c7",
            id: 122,
            indeterminate: false,
            name: "c7",
            newInserted: false,
            nodeType: "child",
            ok: false,
            parent: undefined,
            path: "vehicles/c7/",
            selected: false
          },
          {
            checked: false,
            children: [],
            description: "my c8",
            id: 123,
            indeterminate: false,
            name: "c8",
            newInserted: false,
            nodeType: "child",
            ok: false,
            parent: undefined,
            path: "vehicles/c8/",
            selected: false
          },
          {
            checked: false,
            children: [],
            description: "my c9",
            id: 124,
            indeterminate: false,
            name: "c9",
            newInserted: false,
            nodeType: "child",
            ok: false,
            parent: undefined,
            path: "vehicles/c9/",
            selected: false
          },

          {
            checked: false,
            children: [],
            description: "my c10",
            id: 125,
            indeterminate: false,
            name: "c10",
            newInserted: false,
            nodeType: "child",
            ok: false,
            parent: undefined,
            path: "vehicles/c10/",
            selected: false
          },
          {
            checked: false,
            children: [],
            description: "my c11",
            id: 126,
            indeterminate: false,
            name: "c11",
            newInserted: false,
            nodeType: "child",
            ok: false,
            parent: undefined,
            path: "vehicles/c11/",
            selected: false
          },







        ],
        description: "my car",
        id: 113,
        indeterminate: false,
        name: "car",
        newInserted: false,
        nodeType: "parent",
        ok: false,
        parent: undefined,
        path: "vehicles/car/",
        selected: false
      },
      {
        checked: false,
        children: [
          {
            checked: false,
            children: [],
            description: "my b1",
            id: 127,
            indeterminate: false,
            name: "b1",
            newInserted: false,
            nodeType: "child",
            ok: false,
            parent: undefined,
            path: "vehicles/b1/",
            selected: false
          },
          {
            checked: false,
            children: [],
            description: "my b2",
            id: 128,
            indeterminate: false,
            name: "b2",
            newInserted: false,
            nodeType: "child",
            ok: false,
            parent: undefined,
            path: "vehicles/b2/",
            selected: false
          },
          {
            checked: false,
            children: [],
            description: "my b3",
            id: 129,
            indeterminate: false,
            name: "b3",
            newInserted: false,
            nodeType: "child",
            ok: false,
            parent: undefined,
            path: "vehicles/b3/",
            selected: false
          },
          {
            checked: false,
            children: [],
            description: "my b4",
            id: 130,
            indeterminate: false,
            name: "b4",
            newInserted: false,
            nodeType: "child",
            ok: false,
            parent: undefined,
            path: "vehicles/b4/",
            selected: false
          },
          {
            checked: false,
            children: [],
            description: "my b5",
            id: 131,
            indeterminate: false,
            name: "b5",
            newInserted: false,
            nodeType: "child",
            ok: false,
            parent: undefined,
            path: "vehicles/b5/",
            selected: false
          },
          {
            checked: false,
            children: [],
            description: "my b6",
            id: 132,
            indeterminate: false,
            name: "b6",
            newInserted: false,
            nodeType: "child",
            ok: false,
            parent: undefined,
            path: "vehicles/b6/",
            selected: false
          },
          {
            checked: false,
            children: [],
            description: "my b7",
            id: 133,
            indeterminate: false,
            name: "b7",
            newInserted: false,
            nodeType: "child",
            ok: false,
            parent: undefined,
            path: "vehicles/b7/",
            selected: false
          },
          {
            checked: false,
            children: [],
            description: "my b8",
            id: 134,
            indeterminate: false,
            name: "b8",
            newInserted: false,
            nodeType: "child",
            ok: false,
            parent: undefined,
            path: "vehicles/b8/",
            selected: false
          },
          {
            checked: false,
            children: [],
            description: "my b9",
            id: 135,
            indeterminate: false,
            name: "b9",
            newInserted: false,
            nodeType: "child",
            ok: false,
            parent: undefined,
            path: "vehicles/b9/",
            selected: false
          },

          {
            checked: false,
            children: [],
            description: "my b10",
            id: 136,
            indeterminate: false,
            name: "b10",
            newInserted: false,
            nodeType: "child",
            ok: false,
            parent: undefined,
            path: "vehicles/b10/",
            selected: false
          },
          {
            checked: false,
            children: [],
            description: "my b11",
            id: 137,
            indeterminate: false,
            name: "b11",
            newInserted: false,
            nodeType: "child",
            ok: false,
            parent: undefined,
            path: "vehicles/b11/",
            selected: false
          },

        ],
        description: "my bus",
        id: 114,
        indeterminate: false,
        name: "bus",
        newInserted: false,
        nodeType: "parent",
        ok: false,
        parent: undefined,
        path: "vehicles/bus/",
        selected: false
      },
      {
        checked: false,
        children: [
          {
            checked: false,
            children: [],
            description: "my a1",
            id: 138,
            indeterminate: false,
            name: "a1",
            newInserted: false,
            nodeType: "child",
            ok: false,
            parent: undefined,
            path: "vehicles/a1/",
            selected: false
          },
          {
            checked: false,
            children: [],
            description: "my a2",
            id: 139,
            indeterminate: false,
            name: "a2",
            newInserted: false,
            nodeType: "child",
            ok: false,
            parent: undefined,
            path: "vehicles/a2/",
            selected: false
          },
          {
            checked: false,
            children: [],
            description: "my a3",
            id: 140,
            indeterminate: false,
            name: "a3",
            newInserted: false,
            nodeType: "child",
            ok: false,
            parent: undefined,
            path: "vehicles/a3/",
            selected: false
          },
          {
            checked: false,
            children: [],
            description: "my a4",
            id: 141,
            indeterminate: false,
            name: "a4",
            newInserted: false,
            nodeType: "child",
            ok: false,
            parent: undefined,
            path: "vehicles/a4/",
            selected: false
          },
          {
            checked: false,
            children: [],
            description: "my a5",
            id: 142,
            indeterminate: false,
            name: "a5",
            newInserted: false,
            nodeType: "child",
            ok: false,
            parent: undefined,
            path: "vehicles/a5/",
            selected: false
          },
          {
            checked: false,
            children: [],
            description: "my a6",
            id: 143,
            indeterminate: false,
            name: "a6",
            newInserted: false,
            nodeType: "child",
            ok: false,
            parent: undefined,
            path: "vehicles/a6/",
            selected: false
          },
          {
            checked: false,
            children: [],
            description: "my a7",
            id: 144,
            indeterminate: false,
            name: "a7",
            newInserted: false,
            nodeType: "child",
            ok: false,
            parent: undefined,
            path: "vehicles/a7/",
            selected: false
          },
          {
            checked: false,
            children: [],
            description: "my a8",
            id: 145,
            indeterminate: false,
            name: "a8",
            newInserted: false,
            nodeType: "child",
            ok: false,
            parent: undefined,
            path: "vehicles/a8/",
            selected: false
          },
          {
            checked: false,
            children: [],
            description: "my a9",
            id: 146,
            indeterminate: false,
            name: "a9",
            newInserted: false,
            nodeType: "child",
            ok: false,
            parent: undefined,
            path: "vehicles/a9/",
            selected: false
          },

          {
            checked: false,
            children: [],
            description: "my a10",
            id: 147,
            indeterminate: false,
            name: "a10",
            newInserted: false,
            nodeType: "child",
            ok: false,
            parent: undefined,
            path: "vehicles/a10/",
            selected: false
          },
          {
            checked: false,
            children: [],
            description: "my a11",
            id: 148,
            indeterminate: false,
            name: "a11",
            newInserted: false,
            nodeType: "child",
            ok: false,
            parent: undefined,
            path: "vehicles/a11/",
            selected: false
          },
        ],
        description: "my auto",
        id: 115,
        indeterminate: false,
        name: "auto",
        newInserted: false,
        nodeType: "parent",
        ok: false,
        parent: undefined,
        path: "vehicles/auto/",
        selected: false
      }
    ],
    description: "my vehicles",
    id: 111, indeterminate: false,
    name: "vehicles",
    newInserted: false,
    nodeType: "parent",
    ok: false,
    parent: undefined,
    path: "vehicles/",
    selected: false
  },
  {
    checked: false,
    children: [
      {
        checked: false,
        children: [],
        description: "my d1",
        id: 149,
        indeterminate: false,
        name: "d1",
        newInserted: false,
        nodeType: "child",
        ok: false,
        parent: undefined,
        path: "vehicles/d1/",
        selected: false
      },
      {
        checked: false,
        children: [],
        description: "my d2",
        id: 150,
        indeterminate: false,
        name: "d2",
        newInserted: false,
        nodeType: "child",
        ok: false,
        parent: undefined,
        path: "vehicles/d2/",
        selected: false
      },
      {
        checked: false,
        children: [],
        description: "my d3",
        id: 151,
        indeterminate: false,
        name: "d3",
        newInserted: false,
        nodeType: "child",
        ok: false,
        parent: undefined,
        path: "vehicles/d3/",
        selected: false
      },
      {
        checked: false,
        children: [],
        description: "my d4",
        id: 152,
        indeterminate: false,
        name: "d4",
        newInserted: false,
        nodeType: "child",
        ok: false,
        parent: undefined,
        path: "vehicles/d4/",
        selected: false
      },
      {
        checked: false,
        children: [],
        description: "my d5",
        id: 153,
        indeterminate: false,
        name: "d5",
        newInserted: false,
        nodeType: "child",
        ok: false,
        parent: undefined,
        path: "vehicles/d5/",
        selected: false
      },
      {
        checked: false,
        children: [],
        description: "my d6",
        id: 154,
        indeterminate: false,
        name: "d6",
        newInserted: false,
        nodeType: "child",
        ok: false,
        parent: undefined,
        path: "vehicles/d6/",
        selected: false
      },
      {
        checked: false,
        children: [],
        description: "my d7",
        id: 155,
        indeterminate: false,
        name: "d7",
        newInserted: false,
        nodeType: "child",
        ok: false,
        parent: undefined,
        path: "vehicles/d7/",
        selected: false
      },
      {
        checked: false,
        children: [],
        description: "my d8",
        id: 156,
        indeterminate: false,
        name: "d8",
        newInserted: false,
        nodeType: "child",
        ok: false,
        parent: undefined,
        path: "vehicles/d8/",
        selected: false
      },
      {
        checked: false,
        children: [],
        description: "my d9",
        id: 157,
        indeterminate: false,
        name: "d9",
        newInserted: false,
        nodeType: "child",
        ok: false,
        parent: undefined,
        path: "vehicles/d9/",
        selected: false
      },

      {
        checked: false,
        children: [],
        description: "my d10",
        id: 158,
        indeterminate: false,
        name: "d10",
        newInserted: false,
        nodeType: "child",
        ok: false,
        parent: undefined,
        path: "vehicles/d10/",
        selected: false
      },
      {
        checked: false,
        children: [],
        description: "my d11",
        id: 159,
        indeterminate: false,
        name: "d11",
        newInserted: false,
        nodeType: "child",
        ok: false,
        parent: undefined,
        path: "vehicles/d11/",
        selected: false
      },
    ],
    description: "my drivers",
    id: 112,
    indeterminate: false,
    name: "drivers",
    newInserted: false,
    nodeType: "parent",
    ok: false,
    parent: undefined,
    path: "drivers/",
    selected: false
  },
];
@Injectable({
  providedIn: 'root',
})
export class TreeDataService {
  // public apiUrl!: string;
  // public ServiceUrl = environment.ServiceAPILink;

  // public treeDataSubsc_: Subscription;
  // public _dataChange = new BehaviorSubject<TreeData[]>([]);

  _dataChange = new BehaviorSubject<TreeData[]>(TREE_DATA);
  constructor() { }

  // public loadObjectMenuData(body:any):Observable<TreeMenuModel>{
  //   this.apiUrl = this.ServiceUrl + environment.GetUserMenu;
  //   return this.httpClient.post<TreeMenuModel>(this.apiUrl,body,{})
  //     // .pipe(map(data => { return data.data}))
  //     // .subscribe(data=>{
  //     //     this._dataChange.next(data);
  //     //   },err=>{console.log('server error',err)},()=>{});
  //  }

  // updateTreeNodes(data: any) {
  //   TREE_DATA.push(data);
  //   this._dataChange.next(TREE_DATA);
  // }
}
