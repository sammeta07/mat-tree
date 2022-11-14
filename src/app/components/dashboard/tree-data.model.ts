// export class TodoItemNode {
//     name!: string;
//     id?: number;
//     children?: VehicleNode[];
//     selected?: boolean;
//     indeterminate?: boolean;
//     parent?: VehicleNode;
// }

// export class TodoItemFlatNode {
//   item!: string;
//   level!: number;
//   expandable!: boolean;
// }

// export interface VehicleNode {
//     name: string;
//     id?: number;
//     children?: VehicleNode[];
//     selected?: boolean;
//     indeterminate?: boolean;
//     parent?: VehicleNode;
// }

// export class TreeData {
//   type                        : string;
//   MenuId                      : number;
//   MenuData                    : string;
//   MenuDesc                    : string;
//   children ?                  : TreeData[];
//   ApprovedBy                  : string;
//   ApprovedDate                : string;
//   CreatedBy                   : string;
//   CreatedDate                 : string;
//   IconImage                   : any;
//   IsApproved                  : number;
//   IsCSS                       : number;
//   IsChildAvailable            : number;
//   IsFolder                    : number;
//   IsMarketCondition           : number;
//   IsObjectEdited              : number;
//   Isvisible                   : number;
//   LeadRouterStatus            : number;
//   MarketSegmentType           : any;
//   MenuCondition               : string;
//   ObjectTypeId                : any;
//   ParentId                    : number;
//   SyncLeadSegmentToMarketo    : string;
//   UpdatedBy                   : string;
//   UpdatedDate                 : string;

//   //added separatey for ease
//   selected?                   : boolean;
//   parent?                     : TreeData;
//   indeterminate?              : boolean;
//   ok?                         : boolean;
//   borderTop?                  : boolean;
//   lastActiveNode?             : boolean
//   // newAddedNode?               : boolean;
//   // editedNode?                 : boolean;
// }

// export class TreeMenuModel{
//   data:TreeData[];
//   success:string;
//   constructor(data:TreeData[],success:string){
//     this.data=data;
//     this.success=success;
//   }
// }

// export interface DialogData {
//   allData     : TreeData[];
//   currentNode : TreeData;
//   MenuId      : number;
//   MenuData    : string;
//   MenuDesc    : string;
//   children?   : TreeData[];
//   Action      : string;
//   isTop       : string;

//   // MenuId:number
//   // MenuData: string;
//   // MenuDesc: string;
//   // children: TreeData[];
//   // ApprovedBy: any;
//   // ApprovedDate: any;
//   // CreatedBy: any;
//   // CreatedDate: any;
//   // IconImage: any;
//   // IsApproved: any;
//   // IsCSS: any;
//   // IsChildAvailable: any;
//   // IsFolder: any;
//   // IsMarketCondition: any;
//   // IsObjectEdited: any;
//   // Isvisible: any;
//   // LeadRouterStatus: any;
//   // MarketSegmentType: any;
//   // MenuCondition:any;
//   // ObjectTypeId: any;
//   // ParentId: any;
//   // SyncLeadSegmentToMarketo: any;
//   // UpdatedBy: any;
//   // UpdatedDate: any;

//   // //added separatey for ease
//   // selected?: boolean;
//   // parent?:TreeData;
//   // indeterminate?:boolean;
//   // ok?:boolean;
//   // borderTop?:boolean;
//   // newAddedNode?:boolean;
//   // editedNode?:boolean;
//   // Action: string;
// }

export interface TreeData {
  id: number;
  name: string;
  description: string;
  children: TreeData[];
  parent?: TreeData | undefined;

  indeterminate: boolean;
  selected: boolean;
  ok: boolean;
}

export interface DialogData {
  name: string;
  description: string;
  component: string;
}
