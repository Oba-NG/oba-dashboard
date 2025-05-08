import Button from "@/components/shared/buttons";
import deliveryMan from "@/assets/images/delivery-man.png";

export default function Home() {
  return (
    <main className="flex flex-col gap-5 p-5">
      {/* Banner section */}
      <section className="w-full max-w-[1200px] mx-auto p-5 bg-[var(--oba-green)] text-white rounded-2xl flex relative">
        <div>
        <h1 className="text-6xl font-medium">Oba Delivers Quality Local Foodstuff, Straight to Your Door.</h1>
        <Button mode="cta">Subscribe Now</Button>
        </div>
        <img src={deliveryMan} alt="delivery man" className="absolute bottom-0 right-0" />
      </section>
    </main>
  )
}
