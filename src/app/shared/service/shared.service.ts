import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  outerPadding = new BehaviorSubject(50);

  constructor() {}
}
