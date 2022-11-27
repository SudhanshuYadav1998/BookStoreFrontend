import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/Services/book/book.service';
import { CartService } from 'src/app/Services/cart/cart.service';
import { FeedbackService } from 'src/app/Services/feedback/feedback.service';
import { WishlistService } from 'src/app/Services/wishlist/wishlist.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-quickview',
  templateUrl: './quickview.component.html',
  styleUrls: ['./quickview.component.scss']
})
export class QuickviewComponent implements OnInit {
  bookId: any;
  book: any;
  defaultImage= "https://res.cloudinary.com/dd3brtmjv/image/upload/v1669210312/640px-Image_not_available_t8zu5s.png";
  ratingValue: any = 0;
  comment: any;
  feedbackList: any = [];
  userId: any;
  myReview: any;
  booksQty: any=1;

  constructor(private bookService: BookService, private feedbackService: FeedbackService, private cartService: CartService,
    private wishlistService: WishlistService, private activeRoute: ActivatedRoute, private _snackBar: MatSnackBar, private router: Router)
     {this.userId = localStorage.getItem('token'); }

  ngOnInit(): void {
    this.bookId = this.activeRoute.snapshot.paramMap.get('bookId');
    this.quickView(this.bookId);
    this.getAllFeedback(this.bookId);
  }
  quickView(bookId: any) {
    this.bookService.quickView(bookId).subscribe((response: any) => {
      console.log("QuickView of Book successful", response);
      this.book = response.data;
    });
  }

  addFeedback() {
    let reqData = {
      rating: this.ratingValue,
      comment: this.comment,
      bookId: this.book.bookId
    }
    this.feedbackService.addFeedback(reqData).subscribe((response: any) => {
      console.log("Feedback submitted successful", response);
      this.getAllFeedback(this.bookId);

      this._snackBar.open('Thank you for submitting your valuable feedback', '', {
        duration: 3000,
        verticalPosition: 'bottom',
        panelClass: ['snackbar-green']
      })
    });
  }

  getAllFeedback(bookId: any) {
    this.feedbackService.getAllFeedback(bookId).subscribe((response: any) => {
      console.log("GetAll feedback successful", response);
      this.feedbackList = response.data;
    });
  }

  getShortName(fullName: any) {
    return fullName.split(' ').map((n: any) => n[0]).join('');
  }

  myFeedback() {
    this.displayFeedback(this.feedbackList);
    if (this.myReview?.length > 0) {
      this.ratingValue = this.myReview[0]?.rating;
      this.comment = this.myReview[0]?.comment;
      this._snackBar.open('You have already submitted feedback', '', {
        duration: 3000,
        verticalPosition: 'bottom',
      })
    }
  }

  displayFeedback(list: any) {
    if (list.length > 0) {
      this.myReview = list.filter((object: any) => {
        return object.userId == this.userId;
      })

    }
  }

  addToCart() {
    if (this.book.bookId != ('' || undefined || null)) {
      let reqData = {
       bookId:this.book.bookId,
       booksQty:this.booksQty

      }
      
      this.cartService.addToCart(reqData).subscribe((response: any) => {
        console.log("Added to Cart successfully", response);

        this._snackBar.open('Added to Cart successfully', '', {
          duration: 3000,
          verticalPosition: 'bottom'
        })
      },
      (error: any) => {
        console.log("Item already present in Cart OR Failed to add to cart", error);
        this._snackBar.open("Item already present in Cart OR Failed to add to cart", '', {
          duration: 3000,
          verticalPosition: 'bottom'
        })
      }
      );
    }
    else{console.log("not working");
    }
   
  }
  notifyMe() { }

  addToWishlist() {
    if (this.book.bookId != ('' || undefined || null)) {
      this.wishlistService.addWishlist(this.book.bookId).subscribe((response: any) => {
        console.log("Added to wishlist successfully", response);

        this._snackBar.open('Item Added to Wishlist', '', {
          duration: 3000,
          verticalPosition: 'bottom'
        })
      },
        (error: any) => {
          console.log("Item already present in wishlist OR Failed to add to wishlist", error);
          this._snackBar.open("Item already present in wishlist OR Failed to add to wishlist", '', {
            duration: 3000,
            verticalPosition: 'bottom'
          })
        }
      );
    }
    else{console.log("Not working");
    }
   
  }
}
