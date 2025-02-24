import { useState } from "react";

import { EyeToggle, FavouriteToggle } from "../components/Buttons";

export default function Vite() {
  const [isFavourite, setIsFavourite] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  return (
    <main className="p-5 max-w-[1200px] mx-auto">
      {/* === Oba Dashboard Components === */}

      {/* Small components */}
      <section className="flex items-center gap-5">
        {/* Favourite Toggle */}
        <FavouriteToggle
          onClick={() => setIsFavourite(!isFavourite)}
          isFavourite={isFavourite}
        />

        {/* Eye Toggle */}
        <EyeToggle
          isVisible={isVisible}
          onClick={() => setIsVisible(!isVisible)}
        />
      </section>
    </main>
  );
}
