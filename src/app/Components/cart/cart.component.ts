import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private cartService:CartService) { }
  cartList: any;
  checkStock: boolean = false;
  defaultImage= "https://res.cloudinary.com/dd3brtmjv/image/upload/v1669210312/640px-Image_not_available_t8zu5s.png";

  ngOnInit(): void {
    this.getallcartlist();
  }
  getallcartlist() {
    this.cartService.getallcartlist().subscribe((response: any) => {
      console.log("GetAll Cartlist successful", response);
      this.cartList = response.data;
    });
  }
  removeFromcartlist(cartId:any)
  {
   
    this.cartService.removecartlist(cartId).subscribe((response:any)=>{
      console.log("Cart Deleted Successfully")
    })
  }
}