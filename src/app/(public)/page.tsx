import FeaturedSection from "@/components/Home/FeaturedSection/featured-sections";
import HeroSection from "@/components/Home/HeroSection/hero-section";

export default function Home() {
	return (
		<div className="flex flex-col">
			<div className="h-full">
				<HeroSection />
			</div>
			<FeaturedSection />
		</div>
	);
}
