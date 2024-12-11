import React, { useState, useEffect } from "react";
import { ShoppingCart, Star } from 'lucide-react';
import image9 from "../assets/images/image9.jpg";
import axios from 'axios';
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import useCart from "./useCart";

function Product() {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);

    const debounce = (func, delay) => {
        let timer;
        return function (...args) {
            clearTimeout(timer);
            timer = setTimeout(() => func.apply(this, args), delay);
        };
    };

    const loadProducts = async (currentPage) => {
        if (loading || !hasMore) return;

        setLoading(true);
        try {
            const response = await axios.get('/api/products', { params: { page: currentPage, limit: 20 } });
            setProducts((prev) => [...prev, ...(response.data.products || [])]);
            setHasMore(response.data.hasMore);
        } catch (error) {
            console.error('Error fetching products:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadProducts(page);
    }, [page]);

    useEffect(() => {
        const handleScroll = debounce(() => {
            if (
                window.innerHeight + document.documentElement.scrollTop >=
                document.documentElement.offsetHeight - 100 &&
                !loading &&
                hasMore
            ) {
                setPage((prevPage) => prevPage + 1);
            }
        }, 300);

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [loading, hasMore]);


    const { addToCart } = useCart();

    return (
        <>
            <div className="max-w-7xl w-full m-auto">
                <div className="p-2 xs:p-3 sm:p-4 md:p-5 transition-all">
                    <div className="grid gap-2 xs:gap-3 sm:gap-4 md:gap-5 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {products.map((product) => {
                            return (
                                <div key={product._id} className="border hover:scale-105 transition hover:cursor-pointer border-orange-300">
                                    <img src={image9} className="bg-white h-40 xs:h-60 w-full object-cover" alt="" />
                                    <div className="p-2 flex flex-col gap-2">
                                        <p className="text-xs xs:text-sm md:text-base">{product.description}</p>
                                        <div className="flex gap-2">
                                            <div className="flex">
                                                <Star className="size-3 xs:size-4 text-orange-500 fill-orange-500" fill="true" />
                                                <Star className="size-3 xs:size-4 text-orange-500 fill-orange-500" fill="true" />
                                                <Star className="size-3 xs:size-4 text-orange-500 fill-orange-500" fill="true" />
                                                <Star className="size-3 xs:size-4 text-orange-500 fill-orange-500" fill="true" />
                                                <Star className="size-3 xs:size-4 " />
                                            </div>
                                            <p className="text-xs leading-[1] xs:text-sm xs:leading-[1] sm:text-base sm:leading-3">4.5</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <div className=" text-xs xs:text-sm sm:text-base ">
                                                {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', }).format(product.sellingPrice)}
                                            </div>
                                            <div className=" text-xs xs:text-sm sm:text-base line-through text-gray-700">
                                                {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', }).format(product.actualPrice)}
                                            </div>
                                        </div>
                                        <div className="">
                                            <Button variant="outline" className="flex items-center h-auto p-1" onClick={() => addToCart(product._id)}>
                                                Add To Cart<ShoppingCart size={15} className="" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                        {loading && Array.from({ length: 8 }).map((_, index) =>
                            <div className="hover:scale-105 transition hover:cursor-pointer border-orange-300" key={index}>
                                <Skeleton className="h-40 xs:h-60 w-full object-cover" />
                                <div className="p-2 flex flex-col gap-2">
                                    <Skeleton className="w-11/12 h-4" />
                                    <Skeleton className="w-3/5 h-4" />
                                    <Skeleton className="w-1/3 h-4" />
                                </div>
                            </div>
                        )}
                        {!hasMore && <p>No more items to load.</p>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Product;