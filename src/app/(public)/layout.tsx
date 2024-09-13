import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import { Config } from "@/lib/config";
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";
import { Toaster } from "@/components/ui/sonner";

const poppins = localFont({
	src: "../fonts/Poppins.ttf",
	variable: "--font-poppins",
	weight: "100 900",
});

export const metadata: Metadata = {
	title: Config.APP_NAME,
	description: "Community Skill Sharing Platform",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${poppins.variable} antialiased`}>
				<Header />
				<div className="mt-[56px] flex-1">{children}</div>
				<Footer />
				<Toaster />
			</body>
		</html>
	);
}
