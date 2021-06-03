import { Component } from '@angular/core';
import {GetProductsService} from './get-products.service'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  products:any=[]
  constructor(private productsService:GetProductsService) {
    this.productsService.getProducts().subscribe((data)=>{
      this.products=data
      console.log(data)
    })

  }


}
