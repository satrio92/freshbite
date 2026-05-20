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

const toSlug = (name: string) => name.toLowerCase().replace(/\s+/g, "-");

function AllMenu() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        setProducts(menuData as Product[]);
    }, []);

    return (
        <div
            id="all-product"
            className="w-full h-auto bg-base flex flex-col items-center xl:gap-[90px] gap-[40px] pt-[90px] pb-[64px] xl:pb-[90px]"
        >
            <h2
                className="xl:text-[52px] text-[28px] text-primary font-syncopate font-bold text-center"
                data-aos="fade-up"
            >
                our menu
            </h2>
            <div className="w-full flex justify-center xl:gap-[120px] gap-[calc(120px/100*15)] flex-wrap">
                {products.length === 0 ? (
                    <>
                        {[...Array(6)].map((_, i) => (
                            <div
                                key={i}
                                className="skeleton-card flex flex-col xl:gap-[21px] gap-[12px] animate-pulse"
                            >
                                <div className="xl:w-[314px] w-[calc(314px*51/100)] xl:h-[268px] h-[calc(268px*51/100)] xl:rounded-[12px] rounded-[calc(12px/100*75)] bg-gray-300"></div>
                                <div className="xl:w-[314px] w-[calc(314px*51/100)] xl:h-[143px] h-[80px] xl:rounded-[12px] rounded-[calc(12px/100*75)] bg-gray-300"></div>
                            </div>
                        ))}
                    </>
                ) : (
                    products.map((product, index) => (
                        <ProductCard
                            i={index}
                            key={product.name}
                            name={product.name}
                            description={product.description}
                            image={`/images/products/${toSlug(product.name)}.png`}
                        />
                    ))
                )}
            </div>
        </div>
    );
}

export default AllMenu;