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
  deletedCart: any={};
  priceArray: any=[];

  constructor(private route: ActivatedRoute,
          private navCtrl: NavController,
          private cartService: CartService,
          private homeService: HomeService) {}

  async ngOnInit() {await this.getCart();await this.allProducts();}

  async getCart(){
    await this.cartService.getUserCart(this.userId).subscribe((cart) => {
        this.userCart = cart;
        console.log('logging usercart', this.userCart);
      });
    }

  async allProducts(){
    await this.homeService.fetchProducts().subscribe((products)=>{
      this.products=products;
      console.log(this.products);
      this.getCartPrice();
    });
  }

  getCartPrice(){
    this.userCart.forEach((element)=> {
      let totalPrice: any=0;
      element.products.forEach((product,index) => {
        totalPrice+= this.products[product.productId].price*product.quantity;
      });
      this.priceArray.push(totalPrice);
      console.log(this.priceArray);
    });

  };


  deleteFromCart(cartId) {
    this.cartService.deleteCartProduct(cartId).subscribe(data => {
      this.deletedCart=data;
      console.log(this.deletedCart.id);
      this.userCart.forEach((element ,index)=> {
        if (element.id===this.deletedCart.id){
          this.userCart.splice(index,1);
          return;
        };
      });
    });
  };
}



























