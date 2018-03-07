import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnlayoutComponent } from './columnlayout/columnlayout.component';
import { DefaultlayoutComponent } from './defaultlayout/defaultlayout.component';
import { ColumnreverseComponent } from './columnreverse/columnreverse.component';
import { DirectionrowreverseComponent } from './directionrowreverse/directionrowreverse.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
     ColumnlayoutComponent,
     DefaultlayoutComponent,
     ColumnreverseComponent, 
     DirectionrowreverseComponent
    ],
  exports: [ 
    ColumnlayoutComponent,
    DefaultlayoutComponent,
    ColumnreverseComponent, 
    DirectionrowreverseComponent
  ]
})
export class FlexModule { }
