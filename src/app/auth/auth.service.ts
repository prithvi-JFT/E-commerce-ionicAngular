import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('https://fakestoreapi.com/users')
  }

  login(username:string, password: string) {
    return this.http.post('https://fakestoreapi.com/auth/login', {
      username: username,
      password: password
    })
  }

  loggedIn() {
    return localStorage.getItem('username')
  }

  getToken() {
    return localStorage.getItem('username')
  }

  logOut() {
    return localStorage.removeItem('username')
  }
}
