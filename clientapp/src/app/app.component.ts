import { Component } from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clientApp';
  items: MenuItem[];
  showMenu: boolean;

  ngOnInit() {
    this.showMenu = false;

    this.items = [
      {label: 'Home', icon: 'pi pi-fw pi-home', routerLink: '/', command: () => {this.showMenu = false;}},
      {label: 'Demo', icon: 'pi pi-fw pi-cog', routerLink: '/demo', command: () => {this.showMenu = false;}},
      {label: 'Edit', icon: 'pi pi-fw pi-pencil', command: () => {this.showMenu = false;}},
      {label: 'Documentation', icon: 'pi pi-fw pi-file', command: () => {this.showMenu = false;}},
      {label: 'Settings', icon: 'pi pi-fw pi-cog', command: () => {this.showMenu = false;}}
    ];
  }
}
