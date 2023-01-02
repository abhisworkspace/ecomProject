export interface SignUp {
  name: string;
  email: string;
  password: string;
}

export interface Login {
  email: string;
  password: string;
}

export interface Product {
  id: number;
  product_name: string;
  product_price: number;
  product_color: string;
  product_category: string;
  product_desc: string;
  product_image: string;
}
