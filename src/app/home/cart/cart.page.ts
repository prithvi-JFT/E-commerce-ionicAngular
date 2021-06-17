import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { HomeService } from '../home.service';
import { CartService } from './cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  userCart: any=[];
  userid: any=localStorage.getItem('userId');
  userId: number=+this.userid;

  constructor(private cartService: CartService) { }

  ngOnInit() {this.getCart();}

  async getCart(){
  await this.cartService.getUserCart(this.userId).subscribe((cart)=>{
    this.userCart=cart;
    console.log('logging',this.userCart);
  });
}

deleteFromCart(id) {
  this.cartService.deleteCartProduct(id).subscribe(data => {
    console.log(data);
  });
}
}
