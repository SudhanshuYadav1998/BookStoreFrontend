import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/Services/orders/orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  defaultImage= "https://res.cloudinary.com/dd3brtmjv/image/upload/v1669210312/640px-Image_not_available_t8zu5s.png";
  orderList:any;
  constructor(private orderService :OrdersService) { }

  ngOnInit(): void {
    this.getAllOrders()
  }
  getAllOrders() {
    this.orderService.getOrders().subscribe((response: any) => {
      console.log("GetAll Orders successful", response);
      this.orderList = response.data;
    });
  }
}
