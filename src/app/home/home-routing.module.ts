import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { ProductDetailPage } from './product-detail/product-detail.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
        path: ':productId',
        loadChildren: () =>import('./product-detail/product-detail.module').then( m => m.ProductDetailPageModule)
      }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
