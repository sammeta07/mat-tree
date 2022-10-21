import { TestBed } from '@angular/core/testing';

import { TreeMenuService } from './tree-menu.service';

describe('TreeMenuService', () => {
  let service: TreeMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TreeMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
