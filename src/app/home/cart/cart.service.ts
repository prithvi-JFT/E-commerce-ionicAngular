import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  getUserCart(userId: string){
    return this.http.get(`https://fakestoreapi.com/carts/user/${userId}`);
  }

}
