export interface Products {
    id: number;
    name: string;
    brand: string;
    description: string;
    photo: string;
    price: number;
}

export async function getProducts(): Promise<Products[]> {
    const results = await fetch("https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC")
    const response = results.json();
    const products = (await response).products
    return products;
}

export type CartItems = { [productID: string]: number };
