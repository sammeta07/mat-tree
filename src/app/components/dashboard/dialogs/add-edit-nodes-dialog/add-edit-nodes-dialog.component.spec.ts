import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditNodesDialogComponent } from './add-edit-nodes-dialog.component';

describe('AddEditNodesDialogComponent', () => {
  let component: AddEditNodesDialogComponent;
  let fixture: ComponentFixture<AddEditNodesDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditNodesDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditNodesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
