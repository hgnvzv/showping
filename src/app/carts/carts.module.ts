import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartsComponent } from './components/carts/carts.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CartsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    CartsComponent
  ]
})
export class CartsModule { }
