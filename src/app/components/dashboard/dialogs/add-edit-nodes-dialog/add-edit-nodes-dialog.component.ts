import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
  FormControl,
  FormGroup,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { dialogDataTreeNode, TreeData } from '../../tree-data.model';
import { TreeFunctionService } from '../../tree-function.service';

@Component({
  selector: 'app-add-edit-nodes-dialog',
  templateUrl: './add-edit-nodes-dialog.component.html',
  styleUrls: ['./add-edit-nodes-dialog.component.scss'],
})
export class AddEditNodesDialogComponent implements OnInit {
  newNodeForm!: UntypedFormGroup;
  heading!: string | undefined;
  menuId!: number | undefined;

  constructor(
    public dialogRef: MatDialogRef<AddEditNodesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: dialogDataTreeNode,
    private fb: UntypedFormBuilder,
    private treeFunctionService: TreeFunctionService
  ) { }

  ngOnInit(): void {
    console.log('dialog data ', this.data);
    this.initializeLoginForm();
    if (!this.data.currentNode && !this.data.menu) {
      this.heading = 'add';
      this.newNodeForm.patchValue({ nodeType: 'parent' });
      this.newNodeForm.controls['nodeType'].disable();
    } else {
      this.heading = this.data.menu?.label + ' ' + this.data.currentNode?.name;
      if (this.data.menu?.operation == 'add') {
        this.menuId = this.data.currentNode?.id;
      } else if (this.data.menu?.operation == 'rename') {
        this.newNodeForm.controls['nodeType'].disable();
        this.menuId = this.data.currentNode?.id;
        this.newNodeForm.patchValue({ nodeType: this.data.currentNode?.nodeType });
        this.newNodeForm.patchValue({ name: this.data.currentNode?.name });
        this.newNodeForm.patchValue({ description: this.data.currentNode?.description });
      }
    }
  }

  initializeLoginForm() {
    this.newNodeForm = new FormGroup({
      nodeType: new FormControl({ value: '', disabled: false }, Validators.required),
      name: new FormControl({ value: '', disabled: false }, Validators.required),
      description: new FormControl(''),
    });
  }
  onSaveNewNode() {
    // console.log(this.newNodeForm.getRawValue());
    if (this.newNodeForm.invalid) {
      return this.newNodeForm.markAllAsTouched();
    } else {
      const insertedNode = {
        name: this.newNodeForm.getRawValue().name.trim().toLowerCase(),
        description: this.newNodeForm.value.description.trim().toLowerCase(),
        id: this.data.allData.length ? this.treeFunctionService.findNodeMaxId(this.data.allData) + 1 : 111,
        path: this.data.currentNode?.path ? this.data.currentNode?.path + this.newNodeForm.getRawValue().name.trim().toLowerCase().replace(/ /g, '_') + '/' : this.newNodeForm.getRawValue().name.trim().toLowerCase().replace(/ /g, '_') + '/',
        parent: undefined,
        nodeType: this.newNodeForm.getRawValue().nodeType,
        indeterminate: false,
        ok: false,
        checked: false,
        children: [],
        selected: true,
        newInserted: true,
      };
      let result = {
        update: true,
        operation: this.data.menu?.operation,
        data: insertedNode,
      };
      this.dialogRef.close(result);
    }
  }

  onClickClose() {
    let result = {
      data: {},
      update: false,
    };
    this.dialogRef.close(result);
  }
}
