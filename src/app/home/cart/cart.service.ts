import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map, take, tap} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class cartService {

  constructor(private http: HttpClient) { }

  getUserCart(userId: string){
    return this.http.get(`https://fakestoreapi.com/carts/user/${userId}`);
  }

  getAllProducts
}
