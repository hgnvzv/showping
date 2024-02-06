import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }
  getAllproducts(){
    return this.http.get(environment.baseApi + 'products')
  }


  getAllCategories(){
    return this.http.get(environment.baseApi + 'products/categories')
  }
  getproductsByCategory(keyword:any){
    return this.http.get(environment.baseApi + 'products/categories/'+keyword)
  }
}
