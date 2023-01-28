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
export type CheckoutResponse = { success: boolean; error?: string };

export async function checkout(items: CartItems): Promise<CheckoutResponse> {
  const modifier = Object.keys(items).length > 0 ? "success" : "error";
  const url = `/checkout-${modifier}.json`;
  await sleep(500);
  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify(items),
  });
  const data = await response.json();
  if (!data.success) {
    throw new Error(data.error);
  }
  return data as CheckoutResponse;
}


const sleep = (time: number) => 
  new Promise((res) => setTimeout(res, time));