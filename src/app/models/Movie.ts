export class Movie {

    title:string;

    year:number;

    length:number;

    plot:string

    banner:string;

    trailer:string;

    contentRating:string;

    rating:number;

    categories: string[];

   keywords: string[];

   evaluations: string[];

   constructor(title:string, year:number,length:number, plot:string, banner:string, trailer:string, contentRating:string, rating:number, categories: string[], keywords:string[], evaluations:string[]) {
     this.title= title
     this.year = year
     this.length = length
     this.plot = plot
     this.banner = banner
     this.trailer = trailer
     this.contentRating = contentRating
     this.rating = rating
     this.categories = categories
     this.keywords = keywords
     this.evaluations = evaluations
   }

}
