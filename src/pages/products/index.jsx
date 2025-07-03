import { ProductCard } from "@/components/shared/cards";
import { useProduct } from "@/context/product";
import { data } from "@/assets/data";

export default function Products() {
  const { products } = useProduct();
  const { categories } = data;

  return (
    <main className="flex flex-col gap-5 p-5">
      <section className="flex flex-col gap-5">
        <h2 className="text-2xl font-semibold">Categories</h2>
        <div className="flex gap-2 items-center">
          {categories.map((category) => (
            <button
              key={`prod-${category}`}
              className="px-5 py-2 border border-(--oba-green) rounded-lg text-sm focus:bg-(--oba-green) focus:text-white"
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
              image={product.image_url}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
