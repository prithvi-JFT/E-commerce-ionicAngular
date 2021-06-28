/* eslint-disable max-len */
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { CartService } from '../cart/cart.service';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {

  products: any = [];
  // userId: any;
  userId: any=localStorage.getItem('userId');
  currentNumber = 0;
  userCart: any;

  constructor(private route: ActivatedRoute, private navCtrl: NavController, private homeService: HomeService, private http: HttpClient, private cartService: CartService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if(!paramMap.has('productId')) {
        this.navCtrl.navigateBack('/home');
        return;
      }
      this.homeService.getProduct(paramMap.get('productId')).subscribe(product => {
        this.products = product;
        console.log(this.products);

      });
    });
    this.getCart();
  }

  async getCart(){
    await this.cartService.getUserCart(this.userId).subscribe((cart) => {
        this.userCart = cart;
        console.log('logging', this.userCart);
      });
    }

  onSubmit(form: NgForm) {
    console.log(';;;;');
    const quantity = form.value.quantity;
    console.log(quantity);
  }

  increment() {
    this.currentNumber++;
  }

  decrement() {
    this.currentNumber--;
  }

  addToCart(productId) {
    // console.log('//', id);
    // this.userId = localStorage.getItem('userId');
    this.http.post('https://fakestoreapi.com/carts', {
      // body: JSON.stringify(
        // {
          userId: this.userId,
          date: new Date(),
          products: [{productId, quantity:1}]
        // }
      // )
    }).subscribe(result => {
      console.log(result);
      this.userCart.push(result);
      console.log(this.userCart);
    });
  }
}

