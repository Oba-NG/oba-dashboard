import Button from "@/components/shared/buttons";
import deliveryMan from "@/assets/images/delivery-man.png";

export default function Home() {
  return (
    <main className="flex flex-col gap-5 p-5 py-24">
      {/* Banner section */}
      <section className="w-full max-w-[1200px] mx-auto p-5 lg:p-10 bg-[var(--oba-dark-green)] text-white rounded-2xl flex relative">
        <div className="flex flex-col gap-10">
        <h1 className="text-5xl leading-tight font-medium w-4/6">Oba Delivers Quality Local Foodstuff, Straight to Your Door.</h1>
        <Button mode="cta">Subscribe Now</Button>
        </div>
        <img src={deliveryMan} alt="delivery man" className="absolute bottom-0 right-0" />
      </section>
      {/* Categories section */}
      <section>
        <div className="flex items-center justify-between p-5">
          <h2 className="text-2xl font-medium">Categories</h2>
          <a href="#" className="text-[var(--oba-green)] underline">See All</a>
        </div>
        <div>
          
        </div>
      </section>
    </main>
  )
}
