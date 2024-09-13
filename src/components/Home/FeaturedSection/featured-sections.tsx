import GigCard from "@/components/Cards/gigs-card";

export default function FeaturedSection() {
	return (
		<div className="flex flex-col p-8">
			<div className="mb-4">
				<h3 className="text-2xl font-semibold">Featured Services</h3>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
			  {Array(5).fill(0).map((_,i) => 
				<GigCard />)
				}
			</div>
		</div>
	);
}
