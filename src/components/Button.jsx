/**
 * Types of buttons we need:
 * - Primary button: --oba-green background and border, white text
 * - Secondary button: --bg-color background, black text and border
 * - Tertiary button: --bg-color background, green text and border
 * - Disabled button: --grey background and border, white text
 *
 * We need full width buttons and max-content width buttons
 * Some buttons will have icons inside them.
 *
 * children: the text inside the button
 * type: primary, secondary, tertiary, disabled
 * width: full, max-content
 * height: py-2, py-1
 */

import { HeartIcon } from "lucide-react";

const btn = {
  primary: "bg-[--oba-green] text-white border border-[--oba-green]",
  secondary: "bg-[--bg-color] text-black border border-black",
  tertiary: "bg-[--bg-color] text-[--oba-green] border border-[--oba-green]",
  disabled: "bg-[--grey] text-white border border-[--grey]",
  cta: "bg-white border border-white text-[--oba-green]",
};

export default function Button({ children, className, type }) {
  return (
    <button
      className={`${
        type === "cta"
          ? btn.cta
          : type === "disabled"
          ? btn.disabled
          : type === "secondary"
          ? btn.secondary
          : type === "tertiary"
          ? btn.tertiary
          : btn.primary
      } 
     rounded-md px-2 py-0.5 flex items-center justify-center gap-2 ${className}`}
    >
      {children}
    </button>
  );
}

export function FavouriteToggle({ isFavourite, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center gap-2 rounded-md px-2 py-0.5 ${
        isFavourite ? "bg-primary" : "bg-tertiary"
      } `}
    >
      <HeartIcon fill={isFavourite ? "#f00" : ""} />
    </button>
  );
}
