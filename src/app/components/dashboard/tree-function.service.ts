import { Injectable } from '@angular/core';
import { TreeData } from './tree-data.model';

@Injectable({
  providedIn: 'root',
})
export class TreeFunctionService {
  flatJsonArray(flattenedAray: Array<TreeData>, node: TreeData[]) {
    const array: Array<TreeData> = flattenedAray;
    node.forEach((element) => {
      if (element.children) {
        array.push(element);
        this.flatJsonArray(array, element.children);
      }
    });
    return array;
  }

  findNodeMaxId(node: TreeData[]): number {
    const flatArray = this.flatJsonArray([], node);
    const flatArrayWithoutChildren: number[] = [];
    flatArray.forEach((element) => {
      flatArrayWithoutChildren.push(element.id);
    });
    return Math.max(...flatArrayWithoutChildren);
  }


  findPosition(id: number, data: TreeData[]): number | undefined {
    for (let i = 0; i < data.length; i += 1) {
      if (id === data[i].id) {
        return i;
      }
    }
    return undefined;
  }

  findFatherNode(id: number, data: TreeData[]): any {
    for (let i = 0; i < data.length; i += 1) {
      const currentFather = data[i];
      for (let z = 0; z < currentFather.children.length; z += 1) {
        if (id === currentFather.children[z]['id']) {
          return [currentFather, z];
        }
      }
      for (let z = 0; z < currentFather.children.length; z += 1) {
        if (id !== currentFather.children[z]['id']) {
          const result = this.findFatherNode(id, currentFather.children);
          if (result !== false) {
            return result;
          }
        }
      }
    }
    return false;
  }

  // findIndex(data: TreeData[], id: number): number {
  //   let index: number;
  //   data.findIndex((el, i) => {
  //     if (el.id == id) {
  //       index = i;
  //     }else if(el.children.length){
  //       this.findIndex(el.children,id);
  //     }
  //     return index;
  //   });
  //   return 0;
  // }
}
