import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: any = []
  constructor(private http: HttpClient) { }

  getAllCartProducts() {
    return this.http.get('https://fakestoreapi.com/carts?limit=1')
  }

  deleteCartProduct(id: string) {
    return this.http.delete(`https://fakestoreapi.com/carts/${id}`)
  }
}
