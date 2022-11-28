import { Component, OnInit } from '@angular/core';
import { WishlistService } from 'src/app/Services/wishlist/wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {

  constructor(private wishlistService:WishlistService) { }
  wishList:any;
  defaultImage= "https://res.cloudinary.com/dd3brtmjv/image/upload/v1669210312/640px-Image_not_available_t8zu5s.png";


  ngOnInit(): void {
    this.getallwishlist();
  }
  getallwishlist() {
    this.wishlistService.getallwishlist().subscribe((response: any) => {
      console.log("GetAll Wishlist successful", response);
      this.wishList = response.data;
    });
  }
  removeFromWishlist(wishlistId:any)
  {
   
    this.wishlistService.removewishlist(wishlistId).subscribe((response:any)=>{
      console.log("Book Deleted Successfully",response)
      this.getallwishlist();
    })
  }
}
