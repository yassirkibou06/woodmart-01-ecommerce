"use client"
import { GoChevronRight } from "react-icons/go";
import CardOne from "../CardOne";

const BestOffers = () => {
    const data = [
        {
            id: 1,
            images: [
                "https://woodmart.xtemos.com/mega-electronics/wp-content/uploads/sites/9/2022/10/apple-macbook-pro-16-silver-1.jpg.webp",
                "https://woodmart.b-cdn.net/mega-electronics/wp-content/uploads/sites/9/2022/10/apple-macbook-pro-16-silver-3.jpg",
                "https://woodmart.b-cdn.net/mega-electronics/wp-content/uploads/sites/9/2022/10/apple-macbook-pro-16-silver-4.jpg"
            ],
            name: "Apple Ipad",
            title: "Apple MacBook Pro 16″ M1",
            price: "$889.00",
            oldPrice: "$959.00",
            discount: "10%",
            rating: "5.0",
            sku: "123456",
            brand: "Apple",
            color: "Red",
            Screen: "55"
        },
        {
            id: 2,
            images: [
                "https://woodmart.xtemos.com/mega-electronics/wp-content/uploads/sites/9/2022/10/apple-macbook-pro-16-silver-1.jpg.webp",
                "https://woodmart.b-cdn.net/mega-electronics/wp-content/uploads/sites/9/2022/10/apple-macbook-pro-16-silver-3.jpg",
                "https://woodmart.b-cdn.net/mega-electronics/wp-content/uploads/sites/9/2022/10/apple-macbook-pro-16-silver-4.jpg"
            ],
            name: "Apple Ipad",
            title: "Apple MacBook Pro 16″ M1",
            price: "$889.00",
            oldPrice: "$959.00",
            discount: "10%",
            rating: "5.0",
            sku: "123456",
            brand: "Apple",
            color: "Red",
            Screen: "55"
        },
        {
            id: 3,
            images: [
                "https://woodmart.xtemos.com/mega-electronics/wp-content/uploads/sites/9/2022/10/apple-macbook-pro-16-silver-1.jpg.webp",
                "https://woodmart.b-cdn.net/mega-electronics/wp-content/uploads/sites/9/2022/10/apple-macbook-pro-16-silver-3.jpg",
                "https://woodmart.b-cdn.net/mega-electronics/wp-content/uploads/sites/9/2022/10/apple-macbook-pro-16-silver-4.jpg"
            ],
            name: "Apple Ipad",
            title: "Apple MacBook Pro 16″ M1",
            price: "$889.00",
            oldPrice: "$959.00",
            discount: "10%",
            rating: "5.0",
            sku: "123456",
            brand: "Apple",
            color: "Red",
            Screen: "55"
        },
        {
            id: 4,
            images: [
                "https://woodmart.xtemos.com/mega-electronics/wp-content/uploads/sites/9/2022/10/apple-macbook-pro-16-silver-1.jpg.webp",
                "https://woodmart.b-cdn.net/mega-electronics/wp-content/uploads/sites/9/2022/10/apple-macbook-pro-16-silver-3.jpg",
                "https://woodmart.b-cdn.net/mega-electronics/wp-content/uploads/sites/9/2022/10/apple-macbook-pro-16-silver-4.jpg"
            ],
            name: "Apple Ipad",
            title: "Apple MacBook Pro 16″ M1",
            price: "$889.00",
            oldPrice: "$959.00",
            discount: "10%",
            rating: "5.0",
            sku: "123456",
            brand: "Apple",
            color: "Red",
            Screen: "55"
        },
        {
            id: 5,
            images: [
                "https://woodmart.xtemos.com/mega-electronics/wp-content/uploads/sites/9/2022/10/apple-macbook-pro-16-silver-1.jpg.webp",
                "https://woodmart.b-cdn.net/mega-electronics/wp-content/uploads/sites/9/2022/10/apple-macbook-pro-16-silver-3.jpg",
                "https://woodmart.b-cdn.net/mega-electronics/wp-content/uploads/sites/9/2022/10/apple-macbook-pro-16-silver-4.jpg"
            ],
            name: "Apple Ipad",
            title: "Apple MacBook Pro 16″ M1",
            price: "$889.00",
            oldPrice: "$959.00",
            discount: "10%",
            rating: "5.0",
            sku: "123456",
            brand: "Apple",
            color: "Red",
            Screen: "55"
        },
    ];

    return (
        <div className="mt-24">
            <div className="flex justify-between items-center">
                <h2 className="font-Lato font-semibold text-xl lg:text-[26px] text-neutral-800">The Best Offers</h2>
                <div className="flex items-center bg-blue-100 py-3 px-3 lg:px-6 rounded-full transition-all hover:bg-blue-200/70 cursor-pointer">
                    <p className="text-blue-700 font-medium text-sm mb-[2px]">More products</p>
                    <GoChevronRight className="text-blue-700 text-xl" />
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 lg:gap-5 mt-5">
                {data.map(item => (
                    <CardOne item={item} />
                ))}
            </div>
        </div >
    );
}

export default BestOffers;
