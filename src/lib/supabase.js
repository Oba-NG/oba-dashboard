import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export default supabase;

export async function getProducts() {
  try {
    const { data } = await supabase.from("products").select("*");
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}
