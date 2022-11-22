import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteNodesDialogComponent } from './delete-nodes-dialog.component';

describe('DeleteNodesDialogComponent', () => {
  let component: DeleteNodesDialogComponent;
  let fixture: ComponentFixture<DeleteNodesDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteNodesDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteNodesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
