import { useState, useEffect } from "react";
import { client, urlFor } from "../sanityClient";
import ProductCard from "./ProductCard";

interface product {
  _id: string;
  name: string;
  description: string;
  image: string;
}

function AllMenu() {
  const [products, setProducts] = useState<product[]>([]);

  useEffect(() => {
    client
      .fetch<product[]>(
        `*[_type == "product"] { _id, name, description, image }`
      )
      .then((data) => {
        console.log("Fetched Products:", data);
        setProducts(data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div
      id="all-product"
      className="w-full h-auto bg-base flex flex-col items-center xl:gap-[90px] gap-[40px] pt-[90px] pb-[64px] xl:pb-[90px]"
    >
      <h2 className="xl:text-[52px] text-[28px] text-primary font-syncopate font-bold text-center">
        our menu
      </h2>
      <div className="w-full flex justify-center xl:gap-[120px] gap-[calc(120px/100*15)] flex-wrap">
        {products.map((product) => (
          <ProductCard
            key={product._id}
            name={product.name}
            description={product.description}
            image={urlFor(product.image).width(200).url()}
          />
        ))}
      </div>
    </div>
  );
}

export default AllMenu;
