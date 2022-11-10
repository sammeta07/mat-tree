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
    id: 1,
    name: 'john',
    description: 'Father',
    children: [
      {
        id: 2,
        name: 'Ken',
        description: 'children',
        children: [
          {
            id: 3,
            name: 'Vaggelis13',
            description: 'GrandChildre14',
            children: [
              {
                id: 4,
                name: 'Vaggelis11',
                description: 'GrandChildren12',
                children: [],
              },
            ],
          },
        ],
      },
      {
        id: 5,
        name: 'Bond2',
        description: 'children',
        children: [
          {
            id: 6,
            name: 'Vaggelis9',
            description: 'GrandChildren10',
            children: [],
          },
        ],
      },
      {
        id: 7,
        name: 'Vaggelis1',
        description: 'GrandChildren5',
        children: [
          {
            id: 8,
            name: 'Vaggelis2',
            description: 'GrandChildren6',
            children: [],
          },
          {
            id: 9,
            name: 'Vaggelis3',
            description: 'GrandChildren7',
            children: [],
          },
          {
            id: 10,
            name: 'Vaggelis4',
            description: 'GrandChildren8',
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: 11,
    name: 'John2',
    description: 'tyu2',
    children: [
      {
        id: 12,
        name: 'Ken',
        description: 'children',
        children: [],
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
