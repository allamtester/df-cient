import React, { useEffect, useState } from "react";
import image1 from "../assets/images/image1.png";
import image3 from "../assets/images/image3.png";
import image4 from "../assets/images/image4.png";
import image5 from "../assets/images/image5.png";
import Autoplay from "embla-carousel-autoplay";
import image8 from "../assets/images/image8.jpg";
import image9 from "../assets/images/image9.jpg";
import image14 from "../assets/images/image14.jpg";
import image11 from "../assets/images/image11.jpg";
import image15 from "../assets/images/image15.jpg";
import image13 from "../assets/images/image13.jpg";
import { Star, Navigation, Phone, ChevronRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";


function Home() {

    return (
        <>
            <div className="max-w-7xl w-full m-auto">
                <div className="flex flex-col gap-2 items-center">
                    <p className="text-3xl md:text-4xl lg:text-5xl">The Furniture That Reflect Your Style.</p>
                    <p className="text-sm xs:text-base md:text-lg">Elegant and high quality furniture products</p>
                    <Carousel plugins={[Autoplay({ delay: 3000, jump: true })]} className="max-w-[450px]">
                        <CarouselContent>
                            <CarouselItem><img src={image1}></img></CarouselItem>
                            <CarouselItem><img src={image3}></img></CarouselItem>
                            <CarouselItem><img src={image4}></img></CarouselItem>
                            <CarouselItem><img src={image5}></img></CarouselItem>
                        </CarouselContent>
                    </Carousel>
                </div>

                <div className="text-center mt-1 sm:mt-3 lg:mt-4 text-2xl xs:text-3xl md:text-4xl font-normal mb-2 sm:mb-3 lg:mb-4 "><p>Top Categery</p></div>
                <div className="grid grid-cols-3 md:grid-cols-6 gap-3 text-center p-4 w-full ">
                    <div className="">
                        <img className="rounded-full hover:shadow-2xl border-gray-400 border transition-all m-auto size-16 xs:size-24 sm:size-28 lg:size-40 overflow-hidden" src={image13} alt="" />
                        <div className="mt-1 text-gray-600 lg:mt-2 text-sm xs:text-base lg:text-lg font-medium">Bedroom</div>
                    </div>
                    <div className="">
                        <img className="rounded-full hover:shadow-2xl border-gray-400 border transition-all m-auto size-16 xs:size-24 sm:size-28 lg:size-40 overflow-hidden" src={image8} alt="" />
                        <div className="mt-1 text-gray-600 lg:mt-2 text-sm xs:text-base lg:text-lg font-medium">Sofa</div>
                    </div>
                    <div className="">
                        <img className="rounded-full hover:shadow-2xl border-gray-400 border transition-all m-auto size-16 xs:size-24 sm:size-28 lg:size-40 overflow-hidden" src={image9} alt="" />
                        <div className="mt-1 text-gray-600 lg:mt-2 text-sm xs:text-base lg:text-lg font-medium">Storage</div>
                    </div>
                    <div className="">
                        <img className="rounded-full hover:shadow-2xl border-gray-400 border transition-all m-auto size-16 xs:size-24 sm:size-28 lg:size-40 overflow-hidden" src={image14} alt="" />
                        <div className="mt-1 text-gray-600 lg:mt-2 text-sm xs:text-base lg:text-lg font-medium">Dining</div>
                    </div>
                    <div className="">
                        <img className="rounded-full hover:shadow-2xl border-gray-400 border transition-all m-auto size-16 xs:size-24 sm:size-28 lg:size-40 overflow-hidden" src={image11} alt="" />
                        <div className="mt-1 text-gray-600 lg:mt-2 text-sm xs:text-base lg:text-lg font-medium">Balcony</div>
                    </div>
                    <div className="">
                        <img className="rounded-full hover:shadow-2xl border-gray-400 border transition-all m-auto size-16 xs:size-24 sm:size-28 lg:size-40 overflow-hidden" src={image15} alt="" />
                        <div className="mt-1 text-gray-600 lg:mt-2 text-sm xs:text-base lg:text-lg font-medium">Living</div>
                    </div>
                </div>

                <div className="bg-gray-50 p-4">
                    <div className="text-center">
                        <p className="text-2xl xs:text-3xl md:text-4xl my-2">Benefit Features for You</p>
                        <p className="my-2 text-xs xs:text-sm sm:text-base">Plans, Quality, Specification, and logistics - all in one Space</p>
                    </div>
                    <div className="grid grid-cols-1 gap-4 xs:grid-cols-2 md:grid-cols-3 justify-items-center my-5">
                        <div className="h-auto w-[100%] xs:w-52 xl lg:w-60 xl:w-64 bg-gray-200 p-2 text-center rounded-lg">
                            <div className="size-7 lg:size-10 bg-gray-100 mx-auto flex justify-center rounded-full items-center"><Star className="size-5 lg:size-auto" /></div>
                            <p className="font-semibold text-xs lg:text-sm xl:text-base">Quality Product</p>
                            <p className="text-xs lg:text-sm">Feature pamper our customers to  choose quality materials here all of our furniture products are the best quality</p>
                        </div>
                        <div className="h-auto w-[100%] xs:w-52 lg:w-60 xl:w-64 bg-gray-200 p-2 text-center rounded-lg">
                            <div className="size-7 lg:size-10 bg-gray-100 mx-auto flex justify-center rounded-full items-center"><Navigation className="size-5 lg:size-auto" /></div>
                            <p className="font-semibold text-xs lg:text-sm xl:text-base">Free & Fast Shipping</p>
                            <p className="text-xs lg:text-sm">Every single order ships for free, no minimums, and we deliver the  furniture of their choice to their  destination</p>
                        </div>
                        <div className="h-auto w-[100%] xs:w-52 lg:w-60 xl:w-64 xs:col-span-2 md:col-span-1 bg-gray-200 p-2 text-center rounded-lg">
                            <div className="size-7 lg:size-10 bg-gray-100 mx-auto flex justify-center rounded-full items-center"><Phone className="size-5 lg:size-auto" /></div>
                            <p className="font-semibold text-xs lg:text-sm xl:text-base">24/7 Support</p>
                            <p className="text-xs lg:text-sm">Furtur provides service all the time to provide a happier and easier customer experience if they experience problems</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Home;
