import { Component } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  products: any = []

  constructor(private homeService: HomeService) {}

    ngOnInit() {
      this.homeService.fetchProducts().subscribe((data)=>{
        this.products = data
      })
    }
}
