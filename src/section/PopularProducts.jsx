import  PopularProductCard  from "../components/PopularProductCard";
import { products } from "../constants";

export const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold"><span className="text-coral-red">Popular</span> Products</h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">Explore unparalleled excellence and sophistication with our coveted collections. Immerse yourself in a realm of luxurious comfort, cutting-edge design, and unmatched value. Elevate your experience and indulge in the epitome of style and quality. Welcome to a world where every detail exudes elegance and every choice embodies distinction.
        </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
        {products.map((product) => (
          <PopularProductCard key = {product.name} {...product} />
        ))}
      </div>
    </section>
    )
}


export default PopularProducts