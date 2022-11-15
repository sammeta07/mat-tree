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
    id: 0,
    name: 'john',
    description: 'dafgs sfuh wieoif sofuspofl',
    indeterminate: false,
    selected: false,
    ok: false,
    parent: undefined,
    children: [
      {
        id: 1,
        name: 'gill',
        description: 'dafgs sfuh wieoif sofuspofl',
        indeterminate: false,
        selected: false,
        ok: false,
        parent: undefined,
        children: [
          {
            id: 2,
            name: 'bll',
            description: 'dafgs sfuh wieoif sofuspofl',
            indeterminate: false,
            selected: false,
            ok: false,
            parent: undefined,
            children: [
              {
                id: 3,
                name: 'gated',
                description: 'dafgs sfuh wieoif sofuspofl',
                indeterminate: false,
                selected: false,
                ok: false,
                parent: undefined,
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 7,
    name: 'yous',
    description: 'dafgs sfuh wieoif sofuspofl',
    indeterminate: false,
    selected: false,
    ok: false,
    parent: undefined,
    children: [
      {
        id: 4,
        name: 'slooo',
        description: 'dafgs sfuh wieoif sofuspofl',
        indeterminate: false,
        selected: false,
        ok: false,
        parent: undefined,
        children: [
          {
            id: 5,
            name: 'wooojl',
            description: 'dafgs sfuh wieoif sofuspofl',
            indeterminate: false,
            selected: false,
            ok: false,
            parent: undefined,
            children: [
              {
                id: 6,
                name: 'ajjhhf',
                description: 'dafgs sfuh wieoif sofuspofl',
                indeterminate: false,
                selected: false,
                ok: false,
                parent: undefined,
                children: [],
              },
              {
                id: 8,
                name: 'kiuio',
                description: 'dafgs sfuh wieoif sofuspofl',
                indeterminate: false,
                selected: false,
                ok: false,
                parent: undefined,
                children: [],
              },
              {
                id: 9,
                name: 'serr',
                description: 'dafgs sfuh wieoif sofuspofl',
                indeterminate: false,
                selected: false,
                ok: false,
                parent: undefined,
                children: [],
              },
              {
                id: 10,
                name: 'ioytr',
                description: 'dafgs sfuh wieoif sofuspofl',
                indeterminate: false,
                selected: false,
                ok: false,
                parent: undefined,
                children: [],
              },
              {
                id: 11,
                name: 'tert',
                description: 'dafgs sfuh wieoif sofuspofl',
                indeterminate: false,
                selected: false,
                ok: false,
                parent: undefined,
                children: [],
              },
            ],
          },
        ],
      },
    ],
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
  constructor() {}

  // public loadObjectMenuData(body:any):Observable<TreeMenuModel>{
  //   this.apiUrl = this.ServiceUrl + environment.GetUserMenu;
  //   return this.httpClient.post<TreeMenuModel>(this.apiUrl,body,{})
  //     // .pipe(map(data => { return data.data}))
  //     // .subscribe(data=>{
  //     //     this._dataChange.next(data);
  //     //   },err=>{console.log('server error',err)},()=>{});
  //  }
}
