export type TProduct = {
  id: number; // или string, в зависимости от твоего выбора
  name: string;
  price: number;
  category: string; // если используется
  image: string;
  // discountPrice?: number; // если используется
};