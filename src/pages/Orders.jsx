import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Skeleton } from "@/components/ui/skeleton";
import image9 from "../assets/images/image9.jpg";
import { Star } from 'lucide-react';

const Orders = () => {
	const [orders, setOrders] = useState([]);

	const [page, setPage] = useState(1);
	const [hasMore, setHasMore] = useState(true);
	const [loading, setLoading] = useState(false);
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const loadProducts = async () => {
			if (loading || !hasMore) return;
			setLoading(true);
			try {
				const response = await axios.get('/api/products', { params: { page, limit: 12 } });
				setProducts((prev) => [...prev, ...response.data.products]);
				setHasMore(response.data.hasMore);
			} catch (error) {
				console.error('Error fetching items:', error);
			} finally {
				setLoading(false);
			}
		};
		loadProducts();
	}, [page]);


	const handleScroll = () => {
		if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 100) {
			setPage((prevPage) => prevPage + 1);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);


	return (
		<>
			<hr className="max-w-7xl w-full m-auto" />
			<div className="max-w-5xl w-full m-auto">
				<div className="p-4">
					<h1 className="text-2xl mb-4 font-semibold">Yours Orders</h1>
					<div className="grid gap-2 xs:gap-3 sm:gap-4 md:gap-5 ">
						{products.map((element) => {
							return (
								<div key={element._id} className="border hover:cursor-pointer w-full border-orange-300 flex">
									<img src={image9} className="bg-white h-40 xs:h-60 w-80 object-cover" alt="" />
									<div className="p-2 flex flex-col gap-2">
										<p className="text-xs xs:text-sm md:text-base">{element.description}</p>
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
										<div className=" text-sm xs:text-base sm:text-lg md:text-xl">Rs, {element.price}</div>
									</div>
								</div>
							)
						})}
						{loading && Array.from({ length: 8 }).map((_, index) =>
							<div className="w-full flex" key={index}>
								<Skeleton className="h-40 xs:h-60 w-2/4" />
								<div className="p-4 flex flex-col gap-4 w-full">
									<Skeleton className="w-full h-5" />
									<Skeleton className="w-full h-5" />
									<Skeleton className="w-full h-6" />
								</div>
							</div>
						)}
						{!hasMore && <p>No more items to load.</p>}
					</div>
				</div>
			</div>
		</>
	);
};


export default Orders;
