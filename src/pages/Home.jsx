import { ShoppingCart } from "lucide-react";
import Button from "../components/Button";

export default function Home() {
  return (
    <main className="p-5 max-w-[1200px] mx-auto">
      {/* BUTTONS */}
      <div className="flex gap-5 justify-center">
        {/* Shopping cart button */}
        <Button>
          <ShoppingCart size={16} /> Add to cart
        </Button>

        {/* Pepper button */}
        <Button>Pepper</Button>

        {/* Meat & Poultry button */}
        <Button type="secondary">Meat & Poultry</Button>

        {/* Disabled button */}
        <Button type="disabled">Disabled</Button>

        {/* Random button */}
        <Button>All</Button>

        {/* CTA button */}
        <Button type="cta" className={"px-10 text-sm shadow-md"}>
          Buy Now
        </Button>
      </div>
    </main>
  );
}
