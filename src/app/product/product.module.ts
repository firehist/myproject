import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductFilterPipe } from './product-filter.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProductComponent, ProductDetailComponent, ProductFilterPipe]
})
export class ProductModule { }
