import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmailValidator, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
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
  constructor(private http: HttpClient, private authService: AuthService, private router: Router, private loadingCtrl: LoadingController) { }

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
      this.users.forEach(data=>{
        if(data.username === this.username && data.password === this.password){
          localStorage.setItem('username', data.username)
          this.loadingCtrl.create({
            keyboardClose: true,
            message: 'Logging In...'
          }).then(loadingEl => {
            loadingEl.present()
            setTimeout(() => {
              loadingEl.dismiss()
              this.router.navigate(['/home'])
            }, 1000)
          })
        }
    })
      })
  }
}
