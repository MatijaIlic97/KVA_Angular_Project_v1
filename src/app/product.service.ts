import { Injectable } from "@angular/core";

export interface Product{
    id: number,
    title: string,
    genre: string,
    pageNumber: number,
    author: string,
    price: number,
    totalRate: number,
    numberOfReviews: number,
    rating: number,
    releaseDate: Date,
    imgSource: string
}

@Injectable()
export class ProductService{
    static productList: Array<Product> = [
        {
            id: 1,
            title: "The Lord of the Rings: Fellowship of the Ring",
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
        {
            id: 2,
            title: "The Lord of the Rings: The Two Towers",
            genre: "Fantasy",
            pageNumber: 352,
            author: "J. R. R. Tolkien",
            price: 3500,
            totalRate: 4,
            numberOfReviews: 1,
            rating: 4,
            releaseDate: new Date("1954-11-11"),
            imgSource: 'assets/images/the_two_towers.jpg'
        },
        {
            id: 3,
            title: "The Lord of the Rings: Return of The King",
            genre: "Fantasy",
            pageNumber: 412,
            author: "J. R. R. Tolkien",
            price: 4000,
            totalRate: 5,
            numberOfReviews: 1,
            rating: 5,
            releaseDate: new Date("1955-10-20"),
            imgSource: 'assets/images/return_of_the_king.jpg'
        },
        {
            id: 4,
            title: "The Road",
            genre: "Drama",
            pageNumber: 198,
            author: "Cormac McCarthy",
            price: 1250,
            totalRate: 5,
            numberOfReviews: 1,
            rating: 5,
            releaseDate: new Date("2016-10-10"),
            imgSource: 'assets/images/the_road.jpg'
        },
        {
            id: 5,
            title: "Cassandra's Brand",
            genre: "Drama",
            pageNumber: 270,
            author: "Chingiz Aytmatov",
            price: 1700,
            totalRate: 5,
            numberOfReviews: 1,
            rating: 5,
            releaseDate: new Date("1996-01-10"),
            imgSource: 'assets/images/cassandras_brand.jpg'
        },
        {
            id: 6,
            title: "The Day Lasts More Than a Hundred Years",
            genre: "Drama",
            pageNumber: 368,
            author: "Chingiz Aytmatov",
            price: 1800,
            totalRate: 5,
            numberOfReviews: 1,
            rating: 5,
            releaseDate: new Date("1997-01-15"),
            imgSource: 'assets/images/the_day_lasts_more_than_a_hundred_years.jpg'
        },
        {
            id: 7,
            title: "Crime and Punishment",
            genre: "Classics",
            pageNumber: 714,
            author: "Fyodor Dostoyevsky",
            price: 2000,
            totalRate: 5,
            numberOfReviews: 1,
            rating: 5,
            releaseDate: new Date("2019-05-15"),
            imgSource: 'assets/images/crime_and_punishment.jpg'
        },
        {
            id: 8,
            title: "Journey to the End of the Night",
            genre: "Classics",
            pageNumber: 588,
            author: "Louis-Ferdinand Celine",
            price: 2000,
            totalRate: 5,
            numberOfReviews: 1,
            rating: 5,
            releaseDate: new Date("2023-06-15"),
            imgSource: 'assets/images/journey_to_the_end_of_the_night.jpg'
        },
        {
            id: 9,
            title: "The Magic Mountain",
            genre: "Classics",
            pageNumber: 637,
            author: "Thomas Mann",
            price: 2200,
            totalRate: 5,
            numberOfReviews: 1,
            rating: 5,
            releaseDate: new Date("2003-08-15"),
            imgSource: 'assets/images/the_magic_mountain.jpg'
        },
        {
            id: 10,
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
        },
        {
            id: 11,
            title: "Migrations",
            genre: "Historical",
            pageNumber: 782,
            author: "Milos Crnjanski",
            price: 2500,
            totalRate: 5,
            numberOfReviews: 1,
            rating: 5,
            releaseDate: new Date("2019-04-15"),
            imgSource: 'assets/images/migrations.jpg'
        },
        {
            id: 12,
            title: "Sentimental History of the British Empire",
            genre: "Historical",
            pageNumber: 411,
            author: "Borislav Pekic",
            price: 1700,
            totalRate: 5,
            numberOfReviews: 1,
            rating: 5,
            releaseDate: new Date("2013-10-15"),
            imgSource: 'assets/images/sentimental_history_of_the_british_empire.jpg'
        }
    ]

    
    getProductArray(){
        return ProductService.productList;
    }

    getProductById(id:number): Product{
        let productToReturn !: Product;
        ProductService.productList.forEach(product =>{
            if(product.id === id){
                productToReturn = product;
            }
        })

        return productToReturn;
    }

}