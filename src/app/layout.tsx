import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Nextjs Frontend Template",
	description:
		"This is a Nextjs frontend template with TypeScript and Tailwind CSS for rapid development of web applications and websites with a modern frontend stack and best practices.",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html>
			<body
				className={cn(
					geistSans.variable,
					geistMono.variable,
					"antialiased"
				)}
			>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
