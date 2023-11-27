import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductComponent} from "./product.component";
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductAddComponent} from "./product-add/product-add.component";
import {ProductDetaileComponent} from "./product-detaile/product-detaile.component";

const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: ProductListComponent
      },
      {
        path: 'add',
        component: ProductAddComponent
      },
      {
        path: 'detail',
        component: ProductDetaileComponent
      },
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
