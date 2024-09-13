import Link from "next/link";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ImageOff, IndianRupee, Star } from "lucide-react";

export default function GigCard() {
	return (
		<Card>
			<CardContent className="pt-8">
				<div className="flex flex-col gap-3">
					<div className="w-30 flex h-48 items-center justify-center rounded-md bg-gray-200">
						<ImageOff />
					</div>
					<div className="flex items-center gap-2">
						<Avatar className="h-8 w-8">
							<AvatarImage
								src={"https://github.com/jaimin25.png"}
								className="object-cover"
							/>
							<AvatarFallback>CJ</AvatarFallback>
						</Avatar>
						<p>Test User</p><div className="flex-1"/><p>Level 2</p>
					</div>

<div className="flex items-center gap-2">
        <Star className="fill-yellow-500 stroke-yellow-500"/> 4.2
				</div>
					<div>
						<p className="text-xl">Service description of services and skills provided...</p>
					</div>
				</div>
				<div className="flex items-center gap-2 font-semibold text-xl">
					From ₹2,000
				</div>
			</CardContent>
			<CardFooter className="w-full space-x-2">
				<Link href={`/gigs/view/exaple`} className="w-full">
					<Button variant={"default"} className="w-full">
						View Details
					</Button>
				</Link>
			</CardFooter>
		</Card>
	);
}
