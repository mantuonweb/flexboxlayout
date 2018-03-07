import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnlayoutComponent } from './columnlayout/columnlayout.component';
import { DefaultlayoutComponent } from './defaultlayout/defaultlayout.component';
import { ColumnreverseComponent } from './columnreverse/columnreverse.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ColumnlayoutComponent, DefaultlayoutComponent, ColumnreverseComponent],
  exports: [ColumnlayoutComponent, DefaultlayoutComponent, ColumnreverseComponent]
})
export class FlexModule { }
