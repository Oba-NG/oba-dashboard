import Button from "@/components/shared/buttons";
import deliveryMan from "@/assets/images/delivery-man.png";
import { ProductCard } from "@/components/shared/cards";
import { useEffect, useState } from "react";
import { data } from "@/assets/data";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // We'll use the Oba API to fetch product data from our backend
    // We'll add it to the products state variable... but for now let's use dummy data
    setProducts(data.products);
  }, []);

  return (
    <main className="flex flex-col gap-5 p-5 py-24">
      {/* Banner section */}
      <section className="w-full max-w-[1200px] mx-auto p-5 lg:p-10 bg-(--oba-dark-green) text-white rounded-2xl flex relative">
        <div className="flex flex-col gap-10">
          <h1 className="text-5xl leading-tight font-medium w-4/6">
            Oba Delivers Quality Local Foodstuff, Straight to Your Door.
          </h1>
          <Button mode="cta" className="w-max">
            Subscribe Now
          </Button>
        </div>
        <img
          src={deliveryMan}
          alt="delivery man"
          className="absolute bottom-0 right-0"
        />
      </section>
      {/* Categories section */}
      <section className="w-full max-w-[1200px] mx-auto">
        <div className="flex items-center justify-between p-5">
          <h2 className="text-2xl font-medium">Categories</h2>
          <a href="#" className="text-(--oba-green) underline">
            See All
          </a>
        </div>
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
