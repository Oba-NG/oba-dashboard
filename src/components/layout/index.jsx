import Footer from "@/components/shared/footer";
import Header from "@/components/shared/header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
