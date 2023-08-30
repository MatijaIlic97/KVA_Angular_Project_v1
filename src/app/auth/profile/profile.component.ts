import { Component, Inject } from '@angular/core';
import { User, UserService } from '../user.service';
import { NgForm } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  isEditing: boolean = false;
  profileForInput!: User;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public userService:UserService){}

  ngOnInit(){
    this.profileForInput={
      id:this.data.user.id,
      email:this.data.user.email,
      password:this.data.user.password,
      name:this.data.user.name,
      phone:this.data.user.phone,
      cart: this.data.user.cart,
      orders: this.data.user.orders
    }
  }

  finishEditing(form:NgForm){
    this.data.user.id = this.profileForInput.id;
    this.data.user.email = this.profileForInput.email;
    this.data.user.password = this.profileForInput.password;
    this.data.user.name = this.profileForInput.name;
    this.data.user.phone = this.profileForInput.phone;

    console.log(this.data.user);
    console.log(UserService.userList)
    this.isEditing=true;
    console.log(this.isEditing);
  }

  isEditingToggle(){
    this.isEditing = !this.isEditing;
    console.log(this.isEditing);
  }
}
