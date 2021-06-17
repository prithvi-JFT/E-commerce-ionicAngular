import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map, take, tap} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  fetchProducts(){
    return this.http.get('https://fakestoreapi.com/products')
  }

  getProduct(id: string) {
    return this.http.get(`https://fakestoreapi.com/products/${id}`)
  }


}
