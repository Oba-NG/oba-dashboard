import { useState } from "react";

import { FavouriteToggle } from "../components/Button";

export default function Vite() {
  const [isFavourite, setIsFavourite] = useState(false);

  return (
    <>
      {/* Oba Dashboard Components */}
      <FavouriteToggle
        onClick={() => setIsFavourite(!isFavourite)}
        isFavourite={isFavourite}
      />
    </>
  );
}
