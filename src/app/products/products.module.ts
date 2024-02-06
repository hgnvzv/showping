
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './cpmponents/all-products/all-products.component';
import { ProductsDetailsComponent } from './cpmponents/products-details/products-details.component';
import { SharedModule } from "../shared/shared.module";



@NgModule({
    declarations: [
        AllProductsComponent,
        ProductsDetailsComponent,
    ],
    exports: [
        AllProductsComponent
    ],
    imports: [
        CommonModule,
        SharedModule
    ]
})
export class ProductsModule { }
