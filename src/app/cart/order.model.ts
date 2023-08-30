import { Product } from "../product.service";


export interface Order{
    id:number,
    products: Array<Product>,
    productNum: number,
    status: "ongoing" | "arrived" | "cancelled";
}