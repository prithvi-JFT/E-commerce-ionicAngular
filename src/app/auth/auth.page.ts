import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  username: string
  password: string
  users: any = []
  constructor(private http: HttpClient, private authService: AuthService, private router: Router, private loadingCtrl: LoadingController, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.authService.getUsers().subscribe(data => {
      this.users = data
      console.log(data);
    })
  }

  onSubmit(form: NgForm) {
    this.username = form.value.email;
    this.password = form.value.password;
  }

  onLogin() {
    this.authService.login(this.username, this.password).subscribe((res) => {
      this.loadingCtrl.create({
        keyboardClose: true,
        message: 'Logging In...'
      }).then(loadinEl => {
        loadinEl.present()
        setTimeout(() => {
          let found = false
          this.users.forEach(data => {
            if(data.username === this.username && data.password === this.password) {
              localStorage.setItem('username', data.username)
              loadinEl.dismiss()
              found = true
            }
          })
          if(found) {
            this.router.navigate(['/home'])
          } else {
            this.alertCtrl.create({
              message: 'Invalid Credentials',
              buttons: [
                {
                text: 'Okay',
                role: 'ok'
                }
              ]
            }).then(alertEl => {
              alertEl.present()
              loadinEl.dismiss()
            })
          }
        }, 1000)
      })
    })
  }
}
