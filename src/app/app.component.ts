import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private authService: AuthService, private router: Router, private loadingCtrl: LoadingController) {}

  onLogout() {
    this.authService.logOut()
    this.loadingCtrl.create({
      message: 'Logging Out...'
    }).then(loadingEl => {
      loadingEl.present()
      setTimeout(() => {
        loadingEl.dismiss()
        this.router.navigate(['/auth'])
      }, 1000)
    })
  }
}
