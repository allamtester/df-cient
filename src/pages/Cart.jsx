import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Skeleton } from "@/components/ui/skeleton";
import image9 from "../assets/images/image9.jpg";
import { Star } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Plus } from 'lucide-react';
import { Minus } from 'lucide-react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import useCart from "./useCart";



function Cart() {

    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);
    // const [count, setCount] = useState(1)


    const { cart, addToCart, removeFromCart } = useCart();

    useEffect(() => {
        const loadProducts = async () => {
            setLoading(true);
            try {
                const response = await axios.post('/api/get-cart', {cart:cart});
                setProducts(response.data.products)
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        };
        loadProducts();
    }, [cart]);

    return (
        <>
            <hr className="max-w-7xl w-full m-auto" />
            <div className="max-w-5xl w-full m-auto">
                <div className="p-4">
                    <h1 className="text-2xl mb-4 font-semibold">Yours Cart</h1>
                    {/* <div className="grid gap-2 xs:gap-3 sm:gap-4 md:gap-5 "> */}
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead ></TableHead>
                                <TableHead className="flex items-center" >
                                    <div className="w-1/2 text-2xl text-end">Total Price</div>
                                    <div className="w-1/2 text-2xl text-center">0.0</div>
                                </TableHead>
                                <TableHead className=""><Button className="w-full text-xl">Pay Now</Button></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {products.map((element) => {
                                return (
                                    <TableRow key={element._id}>
                                        <TableCell><img src={image9} className="bg-white h-36 w-40  object-cover" alt="" /></TableCell>
                                        <TableCell>
                                            <div className="p-2 flex flex-col gap-2">
                                                <p className="text-xs xs:text-sm md:text-base lg:text-lg">{element.description}</p>
                                                <div className="flex gap-2">
                                                    <div className="flex">
                                                        <Star className="size-3 xs:size-4 md:size-5 text-orange-500 fill-orange-500" fill="true" />
                                                        <Star className="size-3 xs:size-4 md:size-5 text-orange-500 fill-orange-500" fill="true" />
                                                        <Star className="size-3 xs:size-4 md:size-5 text-orange-500 fill-orange-500" fill="true" />
                                                        <Star className="size-3 xs:size-4 md:size-5 text-orange-500 fill-orange-500" fill="true" />
                                                        <Star className="size-3 xs:size-4 md:size-5" />
                                                    </div>
                                                    <p className="text-xs leading-[1] xs:text-sm xs:leading-[1] sm:text-base sm:leading-3 md:text-lg md:leading-[1.2]">4.5</p>
                                                </div>
                                                <div className="flex gap-2">
                                                    <div className=" text-sm xs:text-base sm:text-lg md:text-xl ">
                                                        {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', }).format(element.sellingPrice)}
                                                    </div>
                                                    <div className=" text-sm xs:text-base sm:text-lg md:text-xl line-through text-gray-700">
                                                        {new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', }).format(element.actualPrice)}
                                                    </div>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="w-40 border-2 rounded-full grid grid-cols-3 p-1">
                                                <Button className="rounded-full text-lg ">
                                                    <Minus strokeWidth={4} />
                                                </Button>
                                                <div className=" text-lg flex items-center justify-center font-semibold">{element.quantity}</div>
                                                <Button className="rounded-full text-lg " >
                                                    <Plus strokeWidth={4} />
                                                </Button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                            {loading && Array.from({ length: 2 }).map((_, index) =>
                                <TableRow key={index}>
                                    <TableCell><Skeleton className="h-36 w-40  " /></TableCell>
                                    <TableCell>
                                        <div className="p-2 flex flex-col gap-2">
                                            <Skeleton className="h-5" />
                                            <Skeleton className="h-5" />
                                            <Skeleton className="h-5" />
                                            <Skeleton className="h-5" />
                                            <Skeleton className="h-5" />
                                        </div>
                                    </TableCell>
                                    <TableCell><Skeleton className="w-40 border-2 rounded-full grid grid-cols-3 p-1" /></TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>

                </div>
            </div >
        </>
    );
}

export default Cart;