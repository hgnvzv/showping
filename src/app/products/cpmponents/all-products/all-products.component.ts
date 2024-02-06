import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent {
  products: any[]=[];
  Categories:any[]=[];
  loading:boolean = false
  constructor(private service:ProductsService){}

  ngOnInit():void{
    this.getproducts()
    this.getCategories()
  }

  getproducts(){
    this.loading = true
    this.service.getAllproducts().subscribe((res:any) =>{
      this.products =res
      this.loading = false
    } ,error =>{
      this.loading = false
     alert("Error")
    })
  }
  getCategories(){
    this.service.getAllCategories().subscribe((res:any) =>{
      this.loading = true
      console.log(res)
      this.Categories=res
      this.loading = false
    } ,error =>{
      this.loading = false
     alert("Error")
    }
      )
  }
  FilterCategories($event:any){
    let value = $event?.target.value;
    this.getproductsCategory(value)
    console.log(value)
  }
  getproductsCategory(keyword:string){
    this.service.getproductsByCategory(keyword).subscribe(res =>{
      this.products = res as any[];

    },
    error =>{
      alert("Error")
     })
  }

}
