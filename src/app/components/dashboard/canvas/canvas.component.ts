import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit {
  canvasId={};

  constructor(
    private activatedRoute:ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe(params=>{
      this.canvasId=params;
    });
   }

  ngOnInit(): void {
  }

}
