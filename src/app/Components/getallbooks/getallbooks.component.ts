import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/Services/book/book.service';

@Component({
  selector: 'app-getallbooks',
  templateUrl: './getallbooks.component.html',
  styleUrls: ['./getallbooks.component.scss']
})
export class GetallbooksComponent implements OnInit {
  bookList: any;
  sortBy:any="Sort by relevence";
  defaultImage= "https://res.cloudinary.com/dd3brtmjv/image/upload/v1669210312/640px-Image_not_available_t8zu5s.png";

  constructor(private bookService : BookService, private router:Router) { }

  ngOnInit(): void {
    this.getAllBooks()
  }
  getAllBooks() {
    this.bookService.getallbooks().subscribe((response: any) => {
      console.log("GetAll Books successful", response.data);
      this.bookList = response.data;
    });
  }

  relevence(){  
    this.bookList = this.bookList.sort((x: any, y: any) => x.bookId - y.bookId);
    this.sortBy="Sort by relevence";

  }

  PriceLowToHigh(){
    this.bookList = this.bookList.sort((x: any, y: any) => x.discountPrice - y.discountPrice);
    this.sortBy="Price -- Low to High";
  }

  PriceHighToLow(){ 
    this.bookList = this.bookList.sort((x: any, y: any) => y.discountPrice - x.discountPrice);
    this.sortBy="Price -- High to low";
  }

  newestFirst(){
     this.bookList = this.bookList.sort((x: any, y: any) => y.bookId - x.bookId);
     this.sortBy="newest First";
  }
  quickView(bookId:any){
    this.router.navigateByUrl('/home/quickview/' + bookId);
  }
}
