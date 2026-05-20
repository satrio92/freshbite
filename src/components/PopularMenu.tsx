import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import menuData from "../data/menu.json";

interface Product {
    name: string;
    description: string;
    price: number;
    featured: boolean;
    type: string;
}

const toSlug = (name: string) =>
    name.toLowerCase().replace(/\s+/g, "-");

function PopularMenu() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        console.log("Menu data:", menuData);
        setProducts(menuData as Product[]);
    }, []);

    return (
        <div
            id="popular-product"
            className="w-full xl:h-[calc(100vh*2)] h-auto bg-base flex flex-col items-center xl:gap-[90px] gap-[40px] pt-[90px] pb-[64px] xl:pb-[90px]"
        >
            <h2
                className="xl:text-[52px] text-[28px] text-primary font-syncopate font-bold text-center"
                data-aos="fade-up"
            >
                our popular menu
            </h2>
            <div className="w-full flex justify-center xl:gap-[120px] gap-[calc(120px/100*15)] flex-wrap">
                {products.map((product, index) => (
                    <ProductCard
                        i={index}
                        key={product.name}
                        name={product.name}
                        description={product.description}
                        image={`/images/products/${toSlug(product.name)}.png`}
                    />
                ))}
            </div>
        </div>
    );
}

export default PopularMenu;