import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Product, ProductService } from '../product.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ProductComponent } from '../product/product.component';
import { UserService } from '../auth/user.service';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit , AfterViewInit{
  hover:boolean = false;
  hoverId: number = 0;

  constructor(public productService: ProductService, private dialog: MatDialog, public userService: UserService, private router: Router){}

  openProduct(id:number){
    const productDialog = this.dialog.open(ProductComponent,{
      disableClose: true,
      width: "50vw",
      data: {product: this.productService.getProductById(id)}
    })
  }

  dataSource = new MatTableDataSource<Product>();
  displayedColumns = ["img", "title", "genre", "pageNumber", "author", "price", "releaseDate", "rating", "button"];

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator !: MatPaginator;

  ngOnInit(){
    this.dataSource.data = this.productService.getProductArray();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

 
    // this.profileOpened = true;

    // const profileDialog = this.dialog.open(ProfileComponent, {
    //   disableClose: true,
    //   width: "40vw",
    //   data: {user: this.userService.getUserById(userId)}


  mouseEnter(id: number){
    this.hover = true;
    this.hoverId = id;
  }

  mouseLeave(){
    this.hover = false;
  }

  addToCart(id: number){
    if(!this.userService.isLoggedIn()){
      window.alert('You have to be logged in to order.');
      this.router.navigate(['/login']);
    }
    else{
    this.userService.currentUser.cart.push(this.productService.getProductById(id));
    window.alert('Item added to cart.');
    }
  }

  doFilter(filterValue: string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getRoundedNum(a:number){
    return Math.round(a*10) / 10;
  }

}
