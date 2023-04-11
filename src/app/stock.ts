export class Stock {
    public favorite: boolean = false;
    constructor(public name: string,
        public code: string,
        public price: number,
        public previousPrice: number,
        public exchange: string) { }

    public toggleFavorite(): boolean
    {
        return this.price > this.previousPrice;
    }
}
