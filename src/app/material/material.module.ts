import { NgModule } from '@angular/core';
import {
  MatCardModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatToolbarModule,
  MatButtonModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  exports: [
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
  ],
})
export class MaterialModule {}
