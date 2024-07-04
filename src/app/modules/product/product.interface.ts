export type IVariants = {
  type: string;
  value: string;
};

export interface IProduct {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: IVariants[];
  inventory: {
    quantity: number;
    inStock: boolean;
  };
}
