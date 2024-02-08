import { Component, OnInit } from '@angular/core';
import { ProductComponent } from 'src/app/products/cpmponents/product/product.component';
import { CartsService } from '../../services/carts.service';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.scss']
})
export class CartsComponent implements OnInit {
  cartproducts: any[] = [];
  total:any=0
  success:boolean = false

  constructor(private service:CartsService) {}

  ngOnInit(): void {
    this.getCartProducts();
  }
  
  getCartProducts() {
    if ("cart" in localStorage) {
      this.cartproducts = JSON.parse(localStorage.getItem("cart")!);
    }
   this.getCartTotal()
  }
  getCartTotal(){
   this.total = 0
   for(let x in this.cartproducts){
    this.total +=this.cartproducts[x].item.price*this.cartproducts[x].quantity;
   }
  }
  addAmount(index:number){
   this.cartproducts[index].quantity++
   localStorage.setItem("cart",JSON.stringify(this.cartproducts))
   this.getCartTotal()
  }
  minAmount(index:number){
    this.cartproducts[index].quantity--
    localStorage.setItem("cart",JSON.stringify(this.cartproducts))
    this.getCartTotal()
  }
  detectChange(){
    this.getCartTotal()
    localStorage.setItem("cart",JSON.stringify(this.cartproducts))
  }
  deletProduct(index:number){
   this.cartproducts.splice(index,1)
   localStorage.setItem("cart",JSON.stringify(this.cartproducts))
   this.getCartTotal()
  }
  claerCart(){
    this.cartproducts=[]
   localStorage.setItem("cart",JSON.stringify(this.cartproducts))
   this.getCartTotal()
  }
  addcart(){
    let Product = this.cartproducts.map(item =>{
      return {productId:item.item.id , quantity:item.quantity}
    })

    let Model = {
      userId:5,
      data:new Date(),
      Product:Product
    }

    this.service.createNewCart(Model).subscribe(res =>{
      this.success = true

    })
  }
}
