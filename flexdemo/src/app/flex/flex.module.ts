import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColumnlayoutComponent } from './columnlayout/columnlayout.component';
import { DefaultlayoutComponent } from './defaultlayout/defaultlayout.component';
import { ColumnreverseComponent } from './columnreverse/columnreverse.component';
import { DirectionrowreverseComponent } from './directionrowreverse/directionrowreverse.component';
import { PerfectcenterComponent } from './perfectcenter/perfectcenter.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
     ColumnlayoutComponent,
     DefaultlayoutComponent,
     ColumnreverseComponent, 
     DirectionrowreverseComponent, 
     PerfectcenterComponent
    ],
  exports: [ 
    ColumnlayoutComponent,
    DefaultlayoutComponent,
    ColumnreverseComponent, 
    DirectionrowreverseComponent,
    PerfectcenterComponent
  ]
})
export class FlexModule { }
