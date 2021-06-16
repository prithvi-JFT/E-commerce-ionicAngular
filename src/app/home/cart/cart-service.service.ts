import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  constructor(private http: HttpClient) { }
  getUserCart(userId:number){
    return this.http.get(`https://fakestoreapi.com/carts/user/${userId}`)
  }
}
