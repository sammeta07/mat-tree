import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { SharedService } from './shared/service/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'x-map';

  color: ThemePalette = "accent";
  checked = false;
  disabled = false;

  isDarkTheme = true;
  toggleTheme () {
    this.isDarkTheme = !this.isDarkTheme;
  }

  constructor(public sharedService:SharedService){

  }
}

