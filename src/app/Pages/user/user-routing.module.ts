import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductComponent} from "../product/product.component";
import {ProductListComponent} from "../product/product-list/product-list.component";
import {ProductAddComponent} from "../product/product-add/product-add.component";
import {ProductDetaileComponent} from "../product/product-detaile/product-detaile.component";
import {UserComponent} from "./user.component";
import {UserListComponent} from "./user-list/user-list.component";
import {UserAddComponent} from "./user-add/user-add.component";
import {UserDetaileComponent} from "./user-detaile/user-detaile.component";

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: UserListComponent
      },
      {
        path: 'add',
        component: UserAddComponent
      },
      {
        path: 'detail',
        component: UserDetaileComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
