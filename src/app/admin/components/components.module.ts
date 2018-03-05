import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../material';
import { AppLayoutComponent } from './app-layout.component';
import { SidenavComponent } from './sidenav.component';
import { NavItemComponent } from './nav-item.component';
import { ToolbarComponent } from './toolbar.component';

export const COMPONENTS = [
  AppLayoutComponent,
  SidenavComponent,
  NavItemComponent,
  ToolbarComponent,
];

@NgModule({
  imports: [CommonModule, MaterialModule, RouterModule],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class ComponentsModule {}
