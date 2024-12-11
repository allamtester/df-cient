import React, { useState } from "react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Search, CircleUser, Menu } from 'lucide-react';
import { useDispatch } from "react-redux";
import { AuthDailog } from "../redux/slice";
// import { CartHover } from "../redux/slice";
import { NavLink } from "react-router-dom";
import { useCookies } from 'react-cookie';
import {
    CreditCard,
    LifeBuoy,
    LogOut,
    Mail,
    MessageSquare,
    PlusCircle,
    Settings,
    User,
    UserPlus,
    ListOrdered,
} from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

function Header() {
    const [cookies, setCookie, removeCookie] = useCookies(['token']);
    const dispatch = useDispatch();

    return (
        <>
            <div className="w-full p-2 bg-orange-300 text-xs sm:text-sm text-center">
                <span className="">The Full House Fiesta Sale | Get upto 70% off + Additional 10% off with bank offers | Shop Now </span>
            </div>

            <div className="max-w-7xl w-full m-auto ">
                {/* Header start-------------- */}
                <div className="p-4 flex justify-between items-center" >
                    <img src="./logo.png" alt="logo" className="w-12 sm:w-14 md:w-16 lg:w-18" />
                    <div className="flex items-center gap-2 md:gap-6 lg:gap-10 max-sm:justify-end">
                        <div className="w-full flex gap-2 max-sm:hidden ">
                            <NavLink to='/' className={({ isActive }) => isActive ? "text-orange-600 font-semibold cursor-pointer rounded-lg hover:bg-secondary px-4 py-2" : "cursor-pointer rounded-lg hover:bg-secondary px-4 py-2"}>Home</NavLink>
                            <NavLink to='/products' className={({ isActive }) => isActive ? "text-orange-600 font-semibold cursor-pointer rounded-lg hover:bg-secondary px-4 py-2" : "cursor-pointer rounded-lg hover:bg-secondary px-4 py-2"}>Products</NavLink>
                            <NavLink to='/about' className={({ isActive }) => isActive ? "text-orange-600 font-semibold cursor-pointer rounded-lg hover:bg-secondary px-4 py-2" : "cursor-pointer rounded-lg hover:bg-secondary px-4 py-2"}>About</NavLink>
                            <NavLink to='/contact' className={({ isActive }) => isActive ? "text-orange-600 font-semibold cursor-pointer rounded-lg hover:bg-secondary px-4 py-2" : "cursor-pointer rounded-lg hover:bg-secondary px-4 py-2"}>Contact</NavLink>
                        </div>
                        <Sheet>
                            <SheetTrigger asChild className="sm:hidden">
                                <Button variant="outline" className="py-1 px-2">
                                    <Menu />
                                </Button>
                            </SheetTrigger>
                            <SheetHeader>
                                <SheetTitle></SheetTitle>
                                <SheetDescription></SheetDescription>
                            </SheetHeader>
                            <SheetContent className="sm:hidden">
                                <div className="mt-4 flex flex-col">
                                    <NavLink to='/' className={({ isActive }) => isActive ? "text-orange-600 font-semibold cursor-pointer rounded-lg hover:bg-secondary px-4 py-2" : "cursor-pointer rounded-lg hover:bg-secondary px-4 py-2"}>Home</NavLink>
                                    <NavLink to='/products' className={({ isActive }) => isActive ? "text-orange-600 font-semibold cursor-pointer rounded-lg hover:bg-secondary px-4 py-2" : "cursor-pointer rounded-lg hover:bg-secondary px-4 py-2"}>Products</NavLink>
                                    <NavLink to='/about' className={({ isActive }) => isActive ? "text-orange-600 font-semibold cursor-pointer rounded-lg hover:bg-secondary px-4 py-2" : "cursor-pointer rounded-lg hover:bg-secondary px-4 py-2"}>About</NavLink>
                                    <NavLink to='/contact' className={({ isActive }) => isActive ? "text-orange-600 font-semibold cursor-pointer rounded-lg hover:bg-secondary px-4 py-2" : "cursor-pointer rounded-lg hover:bg-secondary px-4 py-2"}>Contact</NavLink>
                                </div>
                            </SheetContent>
                        </Sheet>
                        <div className="flex justify-end items-center gap-1 md:gap-2 lg:gap-4">
                            <Search className="cursor-pointer text-gray-600 shrink-0 size-6" strokeWidth={1.5} />
                            {cookies.token ?
                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        {/* <Button variant="outline"> */}
                                        <div className="rounded-full hover:cursor-pointer size-6 p-0 m-0 border-2 border-muted-foreground text-base text-primary flex items-center justify-center" variant="outline">
                                            A
                                        </div>
                                        {/* </Button> */}
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent className="w-56">
                                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuGroup>
                                            <DropdownMenuItem>
                                                <User />
                                                <span>Profile</span>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <CreditCard />
                                                <span>Billing</span>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem>
                                                <Settings />
                                                <span>Settings</span>
                                            </DropdownMenuItem>
                                        </DropdownMenuGroup>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuGroup>
                                            <DropdownMenuSub>
                                                <DropdownMenuSubTrigger>
                                                    <UserPlus />
                                                    <span>Invite users</span>
                                                </DropdownMenuSubTrigger>
                                                <DropdownMenuPortal>
                                                    <DropdownMenuSubContent>
                                                        <DropdownMenuItem>
                                                            <Mail />
                                                            <span>Email</span>
                                                        </DropdownMenuItem>
                                                        <DropdownMenuItem>
                                                            <MessageSquare />
                                                            <span>Message</span>
                                                        </DropdownMenuItem>
                                                        <DropdownMenuSeparator />
                                                        <DropdownMenuItem>
                                                            <PlusCircle />
                                                            <span>More...</span>
                                                        </DropdownMenuItem>
                                                    </DropdownMenuSubContent>
                                                </DropdownMenuPortal>
                                            </DropdownMenuSub>
                                        </DropdownMenuGroup>
                                        <DropdownMenuSeparator />
                                        <NavLink to='/order' className={({ isActive }) => isActive ? "" : ""} >
                                            <DropdownMenuItem>
                                                <ListOrdered />
                                                <span>Orders</span>
                                            </DropdownMenuItem>
                                        </NavLink>
                                        <DropdownMenuItem>
                                            <LifeBuoy />
                                            <span>Support</span>
                                        </DropdownMenuItem>
                                        <DropdownMenuSeparator />
                                        <DropdownMenuItem>
                                            <LogOut />
                                            <span>Log out</span>
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu> :
                                <CircleUser
                                    className="cursor-pointer text-gray-600 shrink-0 size-6"
                                    strokeWidth={1.5}
                                    onClick={() => dispatch(AuthDailog(true))}
                                />
                            }
                            <NavLink to='/cart' className={({ isActive }) => isActive ? "text-orange-600" : "text-gray-600"}>
                                <ShoppingCart
                                    className="cursor-pointer shrink-0 size-6"
                                    strokeWidth={1.5}
                                />
                            </NavLink>
                        </div>
                    </div>
                </div>
                {/* Header end-------------- */}
                <div className="flex bg-gray-100 justify-around rounded-t-lg pt-2 mb-4">
                    <div className="py-2 px-4 hover:cursor-pointer hover:bg-white rounded-t-lg font-semibold text-orange-600">Sofa</div>
                    <div className="py-2 px-4 hover:cursor-pointer hover:bg-white rounded-t-lg ">Living</div>
                    <div className="py-2 px-4 hover:cursor-pointer hover:bg-white rounded-t-lg ">Storage</div>
                    <div className="py-2 px-4 hover:cursor-pointer hover:bg-white rounded-t-lg ">Bedroom</div>
                    <div className="py-2 px-4 hover:cursor-pointer hover:bg-white rounded-t-lg ">Dining</div>
                    <div className="py-2 px-4 hover:cursor-pointer hover:bg-white rounded-t-lg ">Study Hall</div>
                    <div className="py-2 px-4 hover:cursor-pointer hover:bg-white rounded-t-lg ">Kitchen</div>
                    <div className="py-2 px-4 hover:cursor-pointer hover:bg-white rounded-t-lg ">Office</div>
                    <div className="py-2 px-4 hover:cursor-pointer hover:bg-white rounded-t-lg ">Filter</div>
                </div>
                {/* Main content start-------------- */}
            </div>
        </>
    )
}

export default Header;