import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import{CartServiceService} from './cart-service.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  userCart: any=[];
  userid: any=localStorage.getItem('userId');
  userId: number=+this.userid;
  buttonText='Back';
  constructor(private route: ActivatedRoute, private navCtrl: NavController, private cartService: CartServiceService) { }

  ngOnInit() {this.getCart()}

  async getCart(){
  this.cartService.getUserCart(this.userId).subscribe((cart) => {
      this.userCart = cart;
      console.log('logging', this.userCart);
    });
}
}
