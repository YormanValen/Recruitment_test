import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent{
  public active: boolean = false;
  public active__menu : boolean = false;

  setActive(): void {
    this.active = !this.active;
  }

  setActiveMenu(): void {
    this.active__menu = !this.active__menu;
  }
}
