export interface IProduct {
    id: number;
    name: string;
    price: number;
    description: string;
    discount: number;
}

export interface IProductState {
    products: IProduct[];
    selectedProduct: IProduct | null;
}
