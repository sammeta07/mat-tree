import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatAccordion } from '@angular/material/expansion';
import { filter } from 'rxjs';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss'],
})
export class CanvasComponent implements OnInit {
  canvasId = {};
  searchAttribute!: string;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((params) => {
      this.canvasId = params;
    });
  }

  ngOnInit(): void {
    for (let i = 0; i < 20; i++) {
      this.canvas.push('canvas ' + i);
    }
    for (let i = 0; i < 20; i++) {
      this.attributes.push('attributes ' + i);
      this.temp = JSON.parse(JSON.stringify(this.attributes));
    }
  }

  onSearchArributes(event: any) {
    let searchText = event.target.value.toLowerCase();
    console.log(searchText);

    this.attributes = this.temp.filter((x) =>
      x.toLowerCase().includes(searchText)
    );
  }

  onClearSearchAttributes() {
    this.searchAttribute = '';
    this.attributes = this.temp;
  }

  @ViewChild(MatAccordion) accordion!: MatAccordion;
  canvas: string[] = [];
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  attributes: string[] = [];
  temp: string[] = [];
}
