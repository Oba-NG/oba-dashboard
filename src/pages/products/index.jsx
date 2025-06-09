import { ProductCard } from "@/components/shared/cards";
import { useEffect, useState } from "react";
import { data } from "@/assets/data";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // We'll use the Oba API to fetch product data from our backend
    // We'll add it to the products state variable... but for now let's use dummy data
    setProducts(data.products);
    setCategories(data.categories);
  }, []);

  return (
    <main className="flex flex-col gap-5 p-5">
      <section className="flex flex-col gap-5">
        <h2 className="text-2xl font-semibold">Categories</h2>
        <div className="flex gap-2 items-center">
          {categories.map((category) => (
            <button
              key={`prod-${category}`}
              className="px-5 py-2 border border-[var(--oba-green)] rounded-lg text-sm focus:bg-[var(--oba-green)] focus:text-white"
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              rating={product.rating}
              image={product.image}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
