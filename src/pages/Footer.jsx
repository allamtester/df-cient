import { Button } from "@/components/ui/button";
import React from "react";

function Footer() {
    return (
        <footer className="bg-gray-100 border-t">
            <div className="max-w-6xl w-full m-auto">
                <div className=" grid grid-cols-1  md:grid-cols-[auto_1fr] ">
                    <div className="mx-auto mt-5 md:ml-4 md:mt-10 lg:ml-14 lg:mx-10">
                        <img src="./logo.png" alt="logo" className="w-16 sm:w-16 md:w-16 lg:w-16" />
                    </div>
                    <div className="gap-10 text-xs xs:text-sm flex justify-end  lg:gap-20 xl:gap-28 px-2 py-5  flex-wrap">
                        <div className="">
                            <Button variant="link"  className="font-medium p-0 text-orange-600">CATAGERY</Button>
                            <div className="flex flex-col items-start pl-3 pt-1">
                                <Button variant="link" className="text-orange-500 p-0">Living</Button>
                                <Button variant="link" className="text-orange-500 p-0">Sofa</Button>
                                <Button variant="link" className="text-orange-500 p-0">Bedroon</Button>
                                <Button variant="link" className="text-orange-500 p-0">Dining</Button>
                                <Button variant="link" className="text-orange-500 p-0">Balcony</Button>
                            </div>
                        </div>
                        <div className="">
                            <Button variant="link"  className="font-medium p-0 text-orange-600">QUICK LICKS</Button>
                            <div className="flex flex-col items-start pl-3 pt-1">
                                <Button variant="link" className="text-orange-500 p-0">About Us</Button>
                                <Button variant="link" className="text-orange-500 p-0">FAQs</Button>
                                <Button variant="link" className="text-orange-500 p-0">Contact Us</Button>
                                <Button variant="link" className="text-orange-500 p-0">Terms of Service</Button>
                                <Button variant="link" className="text-orange-500 p-0">Refund Policy</Button>
                            </div>
                        </div>
                        <div className="">
                            <Button variant="link"  className="font-medium p-0 text-orange-600">POLICIES</Button>
                            <div className="flex flex-col items-start pl-3 pt-1">
                                <Button variant="link" className="text-orange-500 p-0">Terms of Use</Button>
                                <Button variant="link" className="text-orange-500 p-0">Privacy Policy</Button>
                                <Button variant="link" className="text-orange-500 p-0">Terms of Sale</Button>
                                <Button variant="link" className="text-orange-500 p-0">Shipping Policy</Button>
                                <Button variant="link" className="text-orange-500 p-0">Payment & Security</Button>
                            </div>
                        </div>
                        <div className="">
                            <Button variant="link"  className="font-medium p-0 text-orange-600">CONTACT US</Button>
                            <div className="pt-1 text-orange-600 flex flex-col pl-2 gap-1">
                                <div>Bantia Furnitures Pvt Ltd </div>
                                <div>Corporate Office</div>
                                <div>Bantia Estates 207, Sikh road</div>
                                <div>Secunderbad -500003.</div>
                                <div>Phone: 040-27841562/3/5</div>
                                <div>Email: bantiaenquiry@gmail.com</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;