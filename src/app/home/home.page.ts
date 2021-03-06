import { Component } from '@angular/core';
import { HomeService } from './home.service';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  products: any = [];
  userid: any=localStorage.getItem('userId');
  userCart: any=[];
  userId: number=+this.userid;
  constructor(private homeService: HomeService,private splashScreen: SplashScreen) {};
    // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
    ngOnInit(){
      this.splashScreen.show();
      this.homeService.fetchProducts().subscribe((data)=>{
        this.products = data;
        console.log(this.products);
        this.splashScreen.hide();
      });

    }
}
