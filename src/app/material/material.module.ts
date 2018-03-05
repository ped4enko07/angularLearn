import { NgModule } from '@angular/core';
import {MatCardModule, MatSidenavModule} from '@angular/material';


@NgModule({
  imports: [
    MatSidenavModule,
    MatCardModule,
  ],
  exports: [
    MatSidenavModule,
    MatCardModule,
  ]
})
export class MaterialModule { }
