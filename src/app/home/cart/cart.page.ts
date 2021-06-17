import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import {HomeService} from '../home.service';
import { CartService } from './cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  userCart: any=[];
  products: any=[];
  userid: any=localStorage.getItem('userId');
  userId: number=+this.userid;
  buttonText='Back';
  constructor(private route: ActivatedRoute, private navCtrl: NavController, private cartService: CartService, private homeService: HomeService) { }

  ngOnInit() {this.getCart();this.allProducts();}

  async getCart(){
    await this.cartService.getUserCart(this.userId).subscribe((cart) => {
        this.userCart = cart;
        console.log('logging', this.userCart);
      });
    }

  async allProducts(){
    await this.homeService.fetchProducts().subscribe((products)=>{
      this.products=products;
      console.log(this.products);
    });
  }



deleteFromCart(id) {
  this.cartService.deleteCartProduct(id).subscribe(data => {
    console.log(data);
  });
}
}
