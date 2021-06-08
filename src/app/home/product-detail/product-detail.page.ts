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

  products: any = []

  constructor(private route: ActivatedRoute, private navCtrl: NavController, private homeService: HomeService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if(!paramMap.has('productId')) {
        this.navCtrl.navigateBack('/home');
        return
      }
      this.homeService.getProduct(paramMap.get('productId')).subscribe(product => {
        this.products = product
        console.log(this.products);

      })
    })
  }

}
