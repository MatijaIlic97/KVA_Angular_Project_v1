import { Component, Inject } from '@angular/core';
import { Product, ProductService } from '../product.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from '../auth/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  productData !: Product;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public productService:ProductService, public userService: UserService, private router: Router){}

  ngOnInit(){
    this.productData={
      id:this.data.product.id,
      title:this.data.product.title,
      genre:this.data.product.genre,
      pageNumber:this.data.product.pageNumber,
      author:this.data.product.author,
      price:this.data.product.price,
      totalRate:this.data.product.totalRate,
      numberOfReviews:this.data.product.numberOfReviews,
      rating:this.data.product.rating,
      releaseDate:this.data.product.releaseDate,
      imgSource:this.data.product.imgSource
    }
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

  public Picon1='star_border';
  public Picon2='star_border';
  public Picon3='star_border';
  public Picon4='star_border';
  public Picon5='star_border';

  rateProduct(id:number, rate:number){
    let totalRate = this.productService.getProductById(id).totalRate += rate;
    let numberOfReviews = this.productService.getProductById(id).numberOfReviews += 1;
    this.productService.getProductById(id).rating = (totalRate / numberOfReviews*10);
    if(rate === 1)
      this.Picon1 = 'star';
    else if(rate === 2)
    this.Picon2 = 'star';
    else if(rate === 3)
    this.Picon3 = 'star';
    else if(rate === 4)
    this.Picon4 = 'star';
    else if(rate === 5)
    this.Picon5 = 'star';
  }

  getRoundedNum(a:number, b:number){
    return Math.round(a/b * 10) / 10;
  }



}
