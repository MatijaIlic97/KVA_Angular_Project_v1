import { Injectable } from "@angular/core";
import { Product } from "../product.service";
import { Order } from "../cart/order.model";

// export interface Order{
//     id:number,
//     products: Array<Product>,
//     status: string
// }

export interface User{
    id:number;
    email:string;
    password:string;
    name:string;
    phone:string;
    cart: Array<Product>;
    orders: Array<Order>
}

@Injectable()
export class UserService{
    static orderNum = 1;

    loggedOutUser = {
        id:0,
        email: "0",
        password: "",
        name: "",
        phone: "",
        cart: [],
        orders: []
    }

   
    // Ovo koristiti nakon faze testiranja
    currentUser: User = this.loggedOutUser;

    static userList:Array<User> = [
        {
            id:1,
            email:"nesto@gmail.com",
            password: "nestonesto",
            name: "Nesto",
            phone: "060123123",
            cart: [],
            orders: [{
                id: UserService.orderNum++,
                products: [{id: 1,
                    title: "Lord of the Rings: Fellowship of the Ring",
                    genre: "Fantasy",
                    pageNumber: 423,
                    author: "J. R. R. Tolkien",
                    price: 3000,
                    totalRate: 3,
                    numberOfReviews: 1,
                    rating: 3,
                    releaseDate: new Date("1954-06-29"),
                    imgSource: 'assets/images/fellowship_of_the_ring.jpg'
                },
                {   id: 10,
                    title: "A novel of London",
                    genre: "Historical",
                    pageNumber: 804,
                    author: "Milos Crnjanski",
                    price: 2500,
                    totalRate: 5,
                    numberOfReviews: 1,
                    rating: 5,
                    releaseDate: new Date("2019-04-15"),
                    imgSource: 'assets/images/a_novel_of_london.jpg'
                }],
                productNum: 1,
                status: "arrived"
            }]
        },
        {
            id:2,
            email:"nesto2@gmail.com",
            password: "nestonesto",
            name: "Nesto2",
            phone: "060123124",
            cart: [],
            orders: []
        }
    ];

    getUserName(user:User): string{
        return user.email;
    }

    getUserById(id:number): User{
        let foundUser!: User;
        UserService.userList.forEach(user => {
            if(user.id === id){
                foundUser = user
            }
        })

        this.currentUser = foundUser;

        return foundUser;
    }

    getUser(email:string): User{
        this.currentUser = UserService.userList.find(userToFind => userToFind.email === email)!;
        return this.currentUser;
    }

    isPasswordCorrect(userEmail: string, userPassword: string): boolean{
        return UserService.userList.find(userToFind =>
            (userToFind.email === userEmail && userToFind.password === userPassword)) != undefined;
    }

    registerUser(email: string, password: string, name: string, phone: string): User{
        let maxId = 0;

        let cart : Array<Product> = [];

        let orders: Array<Order> = [];

        UserService.userList.forEach(user => {
            if(user.id > maxId){
                maxId = user.id;
            }
        })

        let id = ++maxId;

        let user = {
            id,
            email,
            password,
            name,
            phone,
            cart,
            orders
        }

        UserService.userList.push(user);
        console.log(user);

        return user;
    }

    isLoggedIn(): boolean{
        return this.currentUser.id !== 0;
    }

    logout(): void{
        this.currentUser = this.loggedOutUser;
    }

    cartIsEmpty(): boolean{
        if(this.currentUser.cart.length === 0)
            return true;
        else
        return false;
    }

    canRateProduct(id: number): boolean{
        let status = false;
        this.currentUser.orders.forEach(order => {
            if(order.status === "arrived"){
                let found = order.products.find(product => product.id === id)
                if(found !== undefined){
                    status = true;
                }
            }
            return status;
        })
        return status;
    }

    getOrders(): Array<Order>{
        return this.currentUser.orders;
    }

    getOrderById(orderId:number): Order {
        let orderToReturn !: Order;
        this.currentUser.orders.forEach((order) => {
            if(order.id === orderId)
                orderToReturn = order;
        })
        return orderToReturn;
    }
}