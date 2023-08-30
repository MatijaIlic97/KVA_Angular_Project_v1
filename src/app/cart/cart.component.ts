import { Component } from '@angular/core';
import { UserService } from '../auth/user.service';
import { Product, ProductService } from '../product.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { Order } from './order.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  constructor(public userService: UserService, public productService: ProductService, private router:Router){}

  cartIsEmpty = this.userService.cartIsEmpty();

  cart = this.userService.currentUser.cart;

  total: number = 0;

  totalPrice = this.userService.currentUser.cart.forEach(product => this.total += product.price);

  dataSource = new MatTableDataSource<Order>();
  displayedColumns = ["orderId", "productTitle", "status", "cancelButton"]


  ngOnInit(){
    this.dataSource.data = this.userService.getOrders();
  }

  removeFromCart(id:number, price:number){
    let indexOfId = this.userService.currentUser.cart.findIndex(product => product.id === id);
    this.userService.currentUser.cart.splice(indexOfId,1);
    this.total -= price;
  }

  addOrder(){
    this.userService.currentUser.orders.push({
      id: UserService.orderNum++,
      products: this.cart,
      productNum: this.cart.length,
      status: "ongoing"
    })
    window.alert("Your order has been placed");
    this.userService.currentUser.cart = [];
    this.cart = [];
    this.total = 0;
    this.cartIsEmpty = true;
    this.ngOnInit();
  }

  isOngoing(status:string):boolean{
    let ret = false;
    if(status === "ongoing")
      ret = true;
    return ret;
  }

  cancelOrder(orderId:number){
    let orderToCancel = this.userService.getOrderById(orderId);
    orderToCancel.status = "cancelled";
  }
}
