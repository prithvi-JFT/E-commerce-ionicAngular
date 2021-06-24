import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {

  products: any = [];
  userId: any;

  constructor(private route: ActivatedRoute, private navCtrl: NavController, private homeService: HomeService, private http: HttpClient) { }

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
  }

  addToCart(id) {
    this.userId = localStorage.getItem('userId');
    this.http.post('https://fakestoreapi.com/carts', {
      // body: JSON.stringify(
        // {
          userId: this.userId,
          date: new Date(),
          products: id
        // }
      // )
    }).subscribe(result => {
      console.log(result);
    });
  }
}

