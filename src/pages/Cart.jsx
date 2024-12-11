import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Skeleton } from "@/components/ui/skeleton";
import image9 from "../assets/images/image9.jpg";
import { Star } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Plus } from 'lucide-react';
import { Minus } from 'lucide-react';
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
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
    const [orders, setOrders] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(1)

    const { cart, addToCart, removeFromCart } = useCart();

    // const loadProducts = async () => {
    //     if (loading) return;

    //     setLoading(true);
    //     try {
    //         const response = await axios.get('/api/products', { params: { page: currentPage, limit: 20 } });
    //         setProducts((prev) => [...prev, ...(response.data.products || [])]);
    //         setHasMore(response.data.hasMore);
    //     } catch (error) {
    //         console.error('Error fetching products:', error);
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    // useEffect(() => {
    //     loadProducts();
    // }, [cart]);

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
                                    <TableRow >

                                        <TableCell><img src={image9} className="bg-white h-36 w-40  object-cover" alt="" /></TableCell>
                                        <TableCell>
                                            <div className="p-2 flex flex-col gap-2">
                                                {/* <p className="text-xs xs:text-sm md:text-base lg:text-lg">{element.description}</p> */}
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
                                                {/* <div className=" text-sm xs:text-base sm:text-lg md:text-xl">Rs, {element.price}</div> */}
                                            </div>
                                        </TableCell>
                                        <TableCell>

                                            <div className="w-40 border-2 rounded-full grid grid-cols-3 p-1">
                                                <Button
                                                    className="rounded-full text-lg "
                                                    onClick={() => {
                                                        console.log(element.count)
                                                        if (element.count == 0) {
                                                            return element.count = 0;
                                                        } else {
                                                            return element.count = element.count - 1
                                                        }
                                                    }}
                                                >
                                                    <Minus strokeWidth={4} />
                                                </Button>
                                                {/* <div className=" text-lg flex items-center justify-center font-semibold">{element.count}</div> */}
                                                <Button className="rounded-full text-lg " onClick={() => { console.log(element.count); return element.count = element.count + 1 }}><Plus strokeWidth={4} /></Button>
                                            </div>

                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>

                </div>
            </div >
        </>
    );
}

export default Cart;
