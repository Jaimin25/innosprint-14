"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
	Menubar,
	MenubarContent,
	MenubarItem,
	MenubarMenu,
	MenubarSeparator,
	MenubarTrigger,
} from "@/components/ui/menubar";
import { Config } from "@/lib/config";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { LogOut, Menu } from "lucide-react";

export default function Header() {
	return (
		<nav className="fixed top-0 z-50 flex h-[48px] w-full items-center border border-b-gray-200 bg-white px-4 py-7 md:px-8">
			<Link href={"/"}>
				<div className="flex items-center gap-1">
					<h2 className="text-3xl">{Config.APP_NAME}</h2>
				</div>
			</Link>
			<div className="flex-1" />
			<div className="hidden lg:flex">
				<Link href={"/gigs/create"}>
					<Button variant={"outline"}>Create new gig</Button>
				</Link>
				<Link href={"/marketplace?offset=0"}>
					<Button variant={"link"}>Marketplace</Button>
				</Link>
				<Link href={"/contact"}>
					<Button variant={"link"}>Contact Us</Button>
				</Link>
				<Link href={"/faq"}>
					<Button variant={"link"}>FAQs</Button>
				</Link>
				<Menubar className="border-none">
					<MenubarMenu>
						<MenubarTrigger>
							<Avatar>
								<AvatarFallback>User</AvatarFallback>
								<AvatarImage
									src={"https://github.com/Jaimin25.png"}
									className="object-cover"
								/>
							</Avatar>
						</MenubarTrigger>
						<MenubarContent>
							<Link href={"/dashboard/accountdetails"}>
								<MenubarItem>Dashboard</MenubarItem>
							</Link>
							<MenubarSeparator />
							<MenubarItem>
								<div className="flex items-center gap-2">
									<LogOut />
									Logout
								</div>
							</MenubarItem>
						</MenubarContent>
					</MenubarMenu>
				</Menubar>
			</div>
			<div className="flex lg:hidden">
				<Menubar className="border-none">
					<MenubarMenu>
						<MenubarTrigger className="border-none p-3 hover:cursor-pointer">
							<Menu size={24} />
						</MenubarTrigger>
						<MenubarContent>
							<Link href={"/auctions/create"}>
								<MenubarItem>Sell</MenubarItem>
							</Link>
							<Link href={"/marketplace?offset=0"}>
								<MenubarItem>Marketplace</MenubarItem>
							</Link>
							<Link href="/contact">
								<MenubarItem>Contact Us</MenubarItem>
							</Link>
							<Link href={"/faq"}>
								<MenubarItem>FAQs</MenubarItem>
							</Link>
							<MenubarSeparator />
							<>
								{" "}
								<Link href={"/dashboard/accountdetails"}>
									<MenubarItem>Dashboard</MenubarItem>
								</Link>
								<MenubarSeparator />
								<MenubarItem>
									<div className="flex items-center gap-2">
										<LogOut />
										Logout
									</div>
								</MenubarItem>
							</>
						</MenubarContent>
					</MenubarMenu>
				</Menubar>
			</div>
		</nav>
	);
}
