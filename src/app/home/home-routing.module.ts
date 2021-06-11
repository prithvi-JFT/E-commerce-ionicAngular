import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
// import { ProductDetailPage } from './product-detail/product-detail.page';
import {AuthGuard} from '../auth/auth.guard'

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
        path: ':productId',
        loadChildren: () =>import('./product-detail/product-detail.module').then( m => m.ProductDetailPageModule)
  },
  {
    path: 'cart/:userId',
    loadChildren: () => import('./cart/cart.module').then( m => m.CartPageModule),
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
