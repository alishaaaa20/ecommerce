import BestSellingProduct from "@/components/HomePage/BestSellingProduct";
import CustomerDiaries from "@/components/HomePage/CustomerDiaries";
import FeatureProducts from "@/components/HomePage/FeatureProducts";
import Hero from "@/components/HomePage/Hero";
import SpecialOffer from "@/components/HomePage/SpecialOffer";

export default function page() {
  return (
    <main>
      <Hero />
      <BestSellingProduct />
      <FeatureProducts />
      <CustomerDiaries />
      <SpecialOffer />
    </main>
  );
}
