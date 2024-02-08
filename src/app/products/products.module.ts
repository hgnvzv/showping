
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './cpmponents/all-products/all-products.component';
import { ProductsDetailsComponent } from './cpmponents/products-details/products-details.component';
import { SharedModule } from "../shared/shared.module";
import { ProductComponent } from './cpmponents/product/product.component';
import { RouterModule } from '@angular/router';




@NgModule({
    declarations: [
        AllProductsComponent,
        ProductsDetailsComponent,
        ProductComponent,
    ],
    exports: [
        AllProductsComponent,
        ProductComponent,
        ProductsDetailsComponent

        
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule
        
    ]
})
export class ProductsModule { }
