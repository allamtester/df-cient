import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import image9 from "../assets/images/image9.jpg";
import { LocateFixed, ShoppingCart, ShoppingBag } from 'lucide-react';
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"


function Overview() {
    return (
        <div className="max-w-7xl w-full m-auto">
            <div className="px-1 sm:px-3 py-1 mb-5 sm:flex">
                <div className="sm:w-[50%]">
                    <img src={image9} alt="" className="w-[100%] h-[400px]" />
                    <div className="flex gap-5 justify-center m-5">
                        <img src={image9} alt="" className="w-32" />
                        <img src={image9} alt="" className="w-32" />
                        <img src={image9} alt="" className="w-32" />
                    </div>
                </div>
                <div className="sm:w-[50%] px-1 sm:px-4 flex flex-col gap-3">
                    <div className="text-lg sm:text-3xl font-medium">Amanda Velvet 3 Seater Sofa In Mustard Yellow Colour</div>
                    <div className="flex flex-wrap items-end gap-2 ">
                        <div className="text-base sm:text-2xl font-semibold text-primary whitespace-nowrap">Rs. 20,000.00 </div>
                        <div className="text-base sm:text-lg font-light whitespace-nowrap">MRP 50,500</div>
                        <div className="text-base sm:text-lg text-primary whitespace-nowrap">(20% Discount)</div>
                    </div>
                    <div>
                        <div className="text-lg sm:text-xl font-semibold mt-1 sm:mt-4 mb-3">Select Color</div>
                        <RadioGroup defaultValue="comfortable" className="flex flex-wrap gap-5 font-semibold my-4 ml-2">
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="default" id="r1" className="size-[20px] " />
                                <Label htmlFor="r1">Black</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="comfortable" id="r2" className="size-[20px] "/>
                                <Label htmlFor="r2">Blue</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <RadioGroupItem value="compact" id="r3" className="size-[20px] "/>
                                <Label htmlFor="r3">Gray</Label>
                            </div>
                        </RadioGroup>
                        {/* <div className="bg-black text-white px-2 py-1 rounded-lg">Black</div>
                            <div className="bg-blue-400 px-2 py-1 rounded-lg">Blue</div>
                            <div className="bg-gray-400 px-2 py-1 rounded-lg">Gray</div> */}
                    </div>
                    <div>
                        <div className="text-xl font-semibold mt-4 mb-3">delivery location</div>
                        <div className="my-4 flex gap-3 items-center">
                            <Input className="w-[50%]" placeholder="Enter Pincode" />
                            <div className="flex gap-1 bg-slate-200 rounded-md px-2 py-2"><LocateFixed /><div className="font-semibold">Locate</div></div>
                        </div>
                    </div>
                    <div className="flex gap-5 my-3">
                        <Button className="w-[50%] [&_svg]:size-6 text-xl font-semibold h-10 hover:bg-primary text-primary hover:text-white bg-white border-2 border-orange-400">
                            <ShoppingCart className="" />ADD TO CART
                        </Button>
                        <Button className="w-[50%] [&_svg]:size-6 text-xl font-semibold h-10 ">
                            <ShoppingBag className="" />BUY NOW
                        </Button>
                    </div>
                    <div>
                        <div className="text-xl font-semibold mt-5 mb-3">Product Details</div>
                        <div className="h-52 flex flex-col flex-wrap gap-1">
                            <div>
                                <div className=" text-gray-700 font-semibold">Brand</div>
                                <div className="text-gray-600">Casacraft from Pepperfry</div>
                            </div>
                            <div>
                                <div className=" text-gray-700 font-semibold">Collections</div>
                                <div className="text-gray-600">Amanda</div>
                            </div>
                            <div>
                                <div className=" text-gray-700 font-semibold">Assembly</div>
                                <div className="text-gray-600">Carpenter Assembly</div>
                            </div>
                            <div>
                                <div className=" text-gray-700 font-semibold">Dimensions (in Inches)</div>
                                <div className="text-gray-600">H 34 x W 75 x D 31</div>
                            </div>
                            <div>
                                <div className=" text-gray-700 font-semibold">Primary Material</div>
                                <div className="text-gray-600">Velvet Fabric</div>
                            </div>
                            <div>
                                <div className=" text-gray-700 font-semibold">Seating Height</div>
                                <div className="text-gray-600">17.5</div>
                            </div>
                            <div>
                                <div className=" text-gray-700 font-semibold">Weight</div>
                                <div className="text-gray-600">44 KG</div>
                            </div>
                            <div>
                                <div className=" text-gray-700 font-semibold">Warranty</div>
                                <div className="text-gray-600">36 Months' Warranty</div>
                            </div>
                            <div>
                                <div className=" text-gray-700 font-semibold">Room Type</div>
                                <div className="text-gray-600">Living Room</div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="text-xl font-semibold mt-4 mb-3">Specifications</div>
                        <div className="text-gray-800">
                            <ul className="list-disc list-inside flex flex-col gap-1">
                                <li>Frame Material : Red Meranti Solid Wood</li>
                                <li>Upholstery : Premium Velvet</li>
                                <li>Thickness : 400 GSM</li>
                                <li>Martindale Rubs - 50,000 + Rubs</li>
                                <li>Leg Material : Solid Wood</li>
                                <li>Seating Mechanism : Pocket Spring</li>
                                <li>Foam Density : HR Foam 28 D Other Features</li>
                                <li>Comfortable Backrest,Well Heighted Armrest</li>
                            </ul>
                            <div className="indent-6 mt-2 text-wrap">Depending on your screen settings and resolution on
                                your device there may be a slight variance in fabric
                                colour and wood polish of the image and actual product.
                                Wood grains will vary from product to product in case
                                of solid wood furniture.Furniture having intricate
                                hand-painted details are individual unique pieces
                                and may have slight distinctions and variance between
                                the picture and actual product.  The Primary material is
                                the main material used to manufacture the product and
                                in addition to the primary material there might also
                                be other type of materials used in the manufacturing of
                                the product
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Overview;