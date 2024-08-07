import { Component } from '@angular/core';
import { MenuData } from './menu-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  collapsed = false;
  menuData = MenuData;
}
