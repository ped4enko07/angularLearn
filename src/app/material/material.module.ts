import { NgModule } from '@angular/core';
import {
  MatCardModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatToolbarModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
} from '@angular/material';

@NgModule({
  imports: [
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
})
export class MaterialModule {}
