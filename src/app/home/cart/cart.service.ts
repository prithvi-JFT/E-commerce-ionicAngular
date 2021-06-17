import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map, take, tap} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: any = [];

  constructor(private http: HttpClient) { }

  getUserCart(userId: number){
    return this.http.get(`https://fakestoreapi.com/carts/user/${userId}`);
  }

  deleteCartProduct(id: string) {
    return this.http.delete(`https://fakestoreapi.com/carts/${id}`);
  }
}
