import React, { useState, useEffect } from "react";
import axios from "axios";
import { Skeleton } from "@/components/ui/skeleton";
import image9 from "../assets/images/image9.jpg";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Plus, Minus, X } from "lucide-react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import useCart from "./useCart";
import { Checkbox } from "@/components/ui/checkbox";
import { LoaderCircle } from 'lucide-react';
import { toast } from "sonner"

function Cart() {

    const { cartAction } = useCart();
    const [loading, setLoading] = useState(true);
    const [loading1, setLoading1] = useState(false);
    const [products, setProducts] = useState([]);
    const [amount, setAmount] = useState(0);
    const [disabled, setDisabled] = useState(false);
    const [selected, setSelected] = useState([]); // State for checkbox selections  
    const [orderResult, setOrderResult] = useState(false)

    useEffect(() => {
        const loadProducts = async () => {
            setLoading(true);
            try {
                const response = await axios.get(
                    "/api/cart",
                    { params: { t: Date.now(), action: "get" } }
                );
                setProducts(response.data.products);
                setSelected(response.data.products.map((product) => {
                    return { productId: product._id, checked: true }
                })); // Initialize checkbox states
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);
            }
        };
        loadProducts();
    }, [orderResult]);

    useEffect(() => {
        if (!loading) {
            const amountData = selected
                .filter(ele => ele.checked) // Filter selected items with checked = true
                .map(ele => products.find(product => product._id === ele.productId)) // Find matching product
                .filter(matchProduct => matchProduct !== undefined) // Remove any undefined products
                .reduce((total, product) => total + (product.sellingPrice * product.quantity), 0); // Calculate total amount

            setAmount(amountData);
        }
    }, [products, loading, selected]);


    const isAllSelected = selected.every((val) => val.checked);

    const handleSelectAll = () => {
        const newValue = !isAllSelected;
        setSelected((prev) => prev.map(element => { return { ...element, checked: newValue } }
        ))
    };

    const handleRowSelect = (productId) => {
        setSelected((prev) => prev.map(element => element.productId == productId ?
            { ...element, checked: !element.checked } : element
        ))
    };

    async function placeOrder() {
        setLoading1(true);
        const selectedProducts = selected
            .filter(ele => ele.checked)
            .map(ele => products.find(product => product._id === ele.productId))
            .filter(matchProduct => matchProduct !== undefined)

        const filterproducts = selectedProducts.map(element => { return { productId: element._id, quantity: element.quantity } });
        try {
            const response = await axios.post(
                "/api/place-order", {},
                { params: { t: Date.now(), products: filterproducts, amount } }
            );
            if (response.data.success) {
                setOrderResult(pre => !pre)
            }
            toast.success("Success", { description: response.data.success, })
        } catch (error) {
            console.error(error)
            toast.error("error", { description: 'error', })
        } finally {
            setLoading1(false)
        }
        console.log("Selected Products for Order:", selectedProducts);
    }

    return (
        <>
            <hr className="max-w-7xl w-full m-auto" />
            <div className="max-w-5xl w-full m-auto">
                <div className="p-4">
                    <h1 className="text-2xl mb-4 font-semibold">Your Cart</h1>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>
                                    <Checkbox
                                        checked={isAllSelected}
                                        // indeterminate={isIndeterminate}
                                        onCheckedChange={handleSelectAll}
                                    />
                                </TableHead>
                                <TableHead className="whitespace-nowrap">Select All</TableHead>
                                <TableHead className="text-2xl text-center w-1/2 whitespace-nowrap">
                                    Total Price:{" "}
                                    {new Intl.NumberFormat("en-IN", {
                                        style: "currency",
                                        currency: "INR",
                                    }).format(amount)}
                                </TableHead>
                                <TableHead className="">
                                    <Button
                                        className="w-full text-xl"
                                        onClick={() => placeOrder()}
                                        disabled={!selected.some((val) => val == undefined ? true : val.checked) || loading1}// Disable if no product selected
                                    >
                                        {loading1 && <LoaderCircle className="animate-spin" />}Pay Now
                                    </Button>
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {!loading &&
                                products.map((product) => (
                                    <TableRow key={product._id}>
                                        <TableCell className="">
                                            <Checkbox
                                                checked={selected.find(ele => ele.productId == product._id).checked}
                                                onCheckedChange={() => handleRowSelect(product._id)}
                                            />
                                        </TableCell>
                                        <TableCell className="flex relative p-4">
                                            <img
                                                src={image9}
                                                className="bg-white h-40 w-full object-cover"
                                                alt=""
                                            />
                                            <Button
                                                className="absolute p-0.5 h-auto top-2 left-2.5 rounded-full"
                                                disabled={disabled}
                                                onClick={async () => {
                                                    setDisabled(true);
                                                    const result = await cartAction(product._id, "remove");
                                                    if (result) {
                                                        setProducts((prevProducts) =>
                                                            prevProducts.filter(
                                                                (prevProduct) => prevProduct._id !== product._id
                                                            )
                                                        );
                                                    }
                                                    setDisabled(false);
                                                }}
                                            >
                                                <X className="" />
                                            </Button>
                                        </TableCell>
                                        <TableCell className="align-top">
                                            <div className="flex flex-col gap-2">
                                                <p className="text-xs xs:text-sm md:text-base lg:text-lg">
                                                    {product.description}
                                                </p>
                                                <div className="flex gap-2">
                                                    <div className="flex">
                                                        <Star
                                                            className="size-3 xs:size-4 md:size-5 text-orange-500 fill-orange-500"
                                                            fill="true"
                                                        />
                                                        <Star
                                                            className="size-3 xs:size-4 md:size-5 text-orange-500 fill-orange-500"
                                                            fill="true"
                                                        />
                                                        <Star
                                                            className="size-3 xs:size-4 md:size-5 text-orange-500 fill-orange-500"
                                                            fill="true"
                                                        />
                                                        <Star
                                                            className="size-3 xs:size-4 md:size-5 text-orange-500 fill-orange-500"
                                                            fill="true"
                                                        />
                                                        <Star className="size-3 xs:size-4 md:size-5" />
                                                    </div>
                                                    <p className="text-xs leading-[1] xs:text-sm xs:leading-[1] sm:text-base sm:leading-3 md:text-lg md:leading-[1.2]">
                                                        4.0
                                                    </p>
                                                </div>
                                                <div className="flex gap-2">
                                                    <div className="text-sm xs:text-base sm:text-lg md:text-xl">
                                                        {new Intl.NumberFormat("en-IN", {
                                                            style: "currency",
                                                            currency: "INR",
                                                        }).format(product.sellingPrice)}
                                                    </div>
                                                    <div className="text-sm xs:text-base sm:text-lg md:text-xl line-through text-gray-700">
                                                        {new Intl.NumberFormat("en-IN", {
                                                            style: "currency",
                                                            currency: "INR",
                                                        }).format(product.actualPrice)}
                                                    </div>
                                                </div>
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <div className="w-40 border-2 rounded-full grid grid-cols-3 p-1 justify-center">
                                                <Button
                                                    className="rounded-full text-lg"
                                                    disabled={disabled}
                                                    onClick={async () => {
                                                        setDisabled(true);
                                                        const result = await cartAction(product._id, "minus");
                                                        if (result) {
                                                            setProducts((prevProducts) =>
                                                                prevProducts
                                                                    .map((prevProduct) =>
                                                                        prevProduct._id === product._id
                                                                            ? prevProduct.quantity > 1
                                                                                ? {
                                                                                    ...prevProduct,
                                                                                    quantity: prevProduct.quantity - 1,
                                                                                }
                                                                                : null
                                                                            : prevProduct
                                                                    )
                                                                    .filter((prevProduct) => prevProduct !== null)
                                                            );
                                                        }
                                                        setDisabled(false);
                                                    }}
                                                >
                                                    <Minus strokeWidth={4} />
                                                </Button>
                                                <div className="text-lg flex items-center justify-center font-semibold">
                                                    {product.quantity}
                                                </div>
                                                <Button
                                                    className="rounded-full text-lg"
                                                    disabled={disabled}
                                                    onClick={async () => {
                                                        setDisabled(true);
                                                        const result = await cartAction(product._id, "add");
                                                        if (result) {
                                                            setProducts((prevProducts) =>
                                                                prevProducts.map((prevProduct) =>
                                                                    prevProduct._id === product._id
                                                                        ? {
                                                                            ...prevProduct,
                                                                            quantity: prevProduct.quantity + 1,
                                                                        }
                                                                        : prevProduct
                                                                )
                                                            );
                                                        }
                                                        setDisabled(false);
                                                    }}
                                                >
                                                    <Plus strokeWidth={4} />
                                                </Button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            {loading &&
                                Array.from({ length: 2 }).map((_, index) => (
                                    <TableRow key={index}>
                                        <TableCell className="align-top p-0">
                                            <Skeleton className="mt-2 h-7 w-6 rounded-full" />
                                        </TableCell>
                                        <TableCell>
                                            <Skeleton className="h-36 w-40" />
                                        </TableCell>
                                        <TableCell>
                                            <div className="p-2 flex flex-col gap-2">
                                                <Skeleton className="h-5" />
                                                <Skeleton className="h-5" />
                                                <Skeleton className="h-5" />
                                                <Skeleton className="h-5" />
                                                <Skeleton className="h-5" />
                                            </div>
                                        </TableCell>
                                        <TableCell>
                                            <Skeleton className="w-40 border-2 h-10 rounded-full grid grid-cols-3 p-1" />
                                        </TableCell>
                                    </TableRow>
                                ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </>
    );
}

export default Cart;
