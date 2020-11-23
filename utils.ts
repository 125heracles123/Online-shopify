import data from "./pages/api/data.json";
import { IAllProducts, ICategory, INotFound, IProduct } from "./types";
export function getData() {
  const { top_categories, top_products } = data;
  return { top_categories, top_products };
}

const notFound = { message: "Not Found" };
export function getProduct(
  categoryId: number,
  productId: number,
): IProduct | INotFound {
  if (!categoryId && !productId) {
    return notFound;
  }
  const foundCategory = data.all_products.find(
    (prod) => prod.category_id === Number(categoryId),
  );
  if (!foundCategory) {
    return notFound;
  }
  if (Array.isArray(foundCategory.products)) {
    const foundProduct = (foundCategory.products as Array<IProduct>).find(
      (el) => el.id === Number(productId),
    );
    if (!foundProduct) {
      return notFound;
    }
    return foundProduct;
  }
  return notFound;
}
interface StaticPropsReturn {
  params: {
    categoryId: string;
    productId: string;
  };
}
export function getTopProductsIds(): StaticPropsReturn[] {
  // Get the top products and make static files for them
  const result: StaticPropsReturn[] = [];
  data.top_products.forEach((topProduct) => {
    topProduct.products.forEach((product) => {
      if (product) {
        result.push({
          params: {
            categoryId: topProduct.category_id.toString(),
            productId: product.id.toString(),
          },
        });
      }
      // else {
      //   console.log(
      //     "🚀 ~ file: utils.ts ~ line 54 ~ topProduct.products.forEach ~ product",
      //     product,
      //   );
      // }
    });
  });
  return result;
}
// export function getProductsOfCategory(categoryId: string){

// }
export function getCategory(category_id: string): IAllProducts | undefined {
  const foundCategory = data.top_products.find(
    (product) => product.category_id === Number(category_id),
  );
  if (!foundCategory) {
    return undefined;
  }
  return foundCategory;
}
export function getPercentageDecreased(
  originalPrice: number,
  basePrice: number,
) {
  return Math.round(((originalPrice - basePrice) / originalPrice) * 100);
}
