import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  products: any

  constructor(private http: HttpClient) { }

  fetchProducts(){
    return this.http.get('https://fakestoreapi.com/products')
  }
}
