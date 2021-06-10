import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home/home.service';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  cart: any = []
  products: any = []
  constructor(private cartService: CartService, private homeService: HomeService) { }

  ngOnInit() {
    this.cartService.getAllCartProducts().subscribe(data => {
      this.cart = data
      console.log(this.cart);
    })
  }

  deleteFromCart(id) {
    this.cartService.deleteCartProduct(id).subscribe(data => {
      console.log(data);
    })
  }
}
