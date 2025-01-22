import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
// import { Instagram, Linkedin, Github } from "lucide-react";
import Instagram from "@/Assets/instagram-logo.svg";
import Linkedin from "@/Assets/linkedin-logo.svg";
import Github from "@/Assets/github-logo.svg";
import Discord from "@/Assets/discord-logo.svg";
import X from "@/Assets/x-logo.svg";
import Notion from "@/Assets/notion-logo.svg";

const footerData = {
	logo: {
		name: "Nextjs Frontend Template",
		href: "/",
	},
	p: {
		text: "This is a Nextjs frontend template with TypeScript and Tailwind CSS for rapid development of web applications and websites with a modern frontend stack and best practices.",
	},
	sections: [
		{
			title: "Company",
			links: [
				{ name: "About Us", href: "/about" },
				{ name: "Careers", href: "/careers" },
				{ name: "Press", href: "/press" },
			],
		},
		{
			title: "Resources",
			links: [
				{ name: "Blog", href: "/blog" },
				{ name: "Help Center", href: "/help" },
				{ name: "Contact Support", href: "/support" },
			],
		},
		{
			title: "Legal",
			links: [
				{ name: "Privacy Policy", href: "/privacy" },
				{ name: "Terms of Service", href: "/terms" },
				{ name: "Cookie Policy", href: "/cookies" },
			],
		},
	],
	socials: [
		{
			icons: Github,
			name: "GitHub",
			href: "",
			color: "bg-black dark:bg-white",
			textColor: "text-white dark:text-black",
		},
		{
			icons: Linkedin,
			name: "LinkedIn",
			href: "",
			color: "bg-blue-600 dark:bg-blue-300",
			textColor: "text-white dark:text-black",
		},
		{
			icons: Instagram,
			name: "Instagram",
			href: "",
			color: "bg-pink-500 dark:bg-pink-300",
			textColor: "text-white dark:text-black",
		},
		{
			icons: Discord,
			name: "Discord",
			href: "",
			color: "bg-[#5865F2] dark:bg-[#7289da]",
			textColor: "text-white dark:text-black",
		},
		{
			icons: X,
			name: "X",
			href: "",
			color: "bg-black dark:bg-white",
			textColor: "text-white dark:text-black",
		},
		{
			icons: Notion,
			name: "Notion",
			href: "",
			color: "bg-black dark:bg-white",
			textColor: "text-white dark:text-black",
		},
	],
	madeBy: [
		{
			name: "Aryan Gulati",
			href: "",
		},
		{
			name: "Neelanjan Mukherji",
			href: "",
		},
	],
};

export default function Footer() {
	return (
		<footer
			className={cn(
				"py-8 px-4 md:px-10",
				"backdrop-blur-md bg-white/30 dark:bg-gray-900/30",
				"border-t border-gray-200 dark:border-gray-700",
				"shadow-[0_-35px_60px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_-35px_60px_-15px_rgba(255,255,255,0.1)]",
				"grid grid-cols-1 md:grid-cols-4 gap-8 justify-center items-start"
			)}
		>
			<div className="col-span-1 text-center md:col-span-4 md:text-left">
				<Link href={footerData.logo.href}>
					<h1
						className={cn(
							"text-4xl font-bold text-black dark:text-white"
						)}
					>
						{footerData.logo.name}
					</h1>
				</Link>
				<p className="mt-2 text-gray-700 dark:text-gray-300">
					{footerData.p.text}
				</p>
			</div>
			{footerData.sections.map((section, index) => (
				<div key={index} className="col-span-1">
					<h2
						className={cn(
							"text-xl font-bold text-black dark:text-white font-mono"
						)}
					>
						{section.title}
					</h2>
					<div
						className={cn(
							"bg-black dark:bg-white",
							"h-0.5",
							"w-10"
						)}
					></div>
					<ul className={cn("mt-2 space-y-2")}>
						{section.links.map((link, index) => (
							<li key={index}>
								<Button
									variant="link"
									effect="hoverUnderline"
									className={cn("text-black dark:text-white")}
								>
									<Link href={link.href}>{link.name}</Link>
								</Button>
							</li>
						))}
					</ul>
				</div>
			))}
			<div>
				<h2
					className={cn(
						"text-xl font-bold text-black dark:text-white font-mono"
					)}
				>
					Socials
				</h2>
				<div
					className={cn("bg-black dark:bg-white", "h-0.5", "w-10")}
				></div>
				<ul
					className={cn(
						"grid grid-cols-3 gap-4 mt-4 md:grid-cols-3 justify-center items-center"
					)}
				>
					{footerData.socials.map((social, index) => (
						<li key={index} className="flex flex-row items-center col-span-1 gap-3 md:flex-col">
							<Link
								href={social.href}
								className={cn("block")}
								target="_blank"
							>
								<Button
									className={cn(
										"rounded-full p-2 h-10 w-10 md:h-12 md:w-12",
										social.color,
										social.textColor
									)}
									variant="link"
									effect="ringHover"
								>
									<social.icons className="w-6 h-6 md:h-8 md:w-8" />
								</Button>
							</Link>
							<span className="flex text-sm md:hidden">{social.name}</span>
						</li>
					))}
				</ul>
			</div>
			<div className="flex flex-col items-center justify-center col-span-1 pt-4 mt-4 space-y-2 border-t border-gray-200 dark:border-gray-700 md:col-span-4 md:flex-row md:justify-between md:space-y-0">
				<p
					className={cn(
						"text-center md:text-left text-gray-500 dark:text-gray-400"
					)}
				>
					&copy; {new Date().getFullYear()} {footerData.logo.name}.
					All rights reserved.
				</p>
				<p
					className={cn(
						"text-center md:text-right text-gray-500 dark:text-gray-400"
					)}
				>
					Designed and developed by{" "}
					{footerData.madeBy.map((madeBy, index) => (
						<React.Fragment key={index}>
							<Button variant="link" effect="hoverUnderline">
								<Link href={madeBy.href}>{madeBy.name}</Link>
							</Button>
							{index < footerData.madeBy.length - 1 && (
								<span className="hidden md:inline">
									&nbsp;&amp;&nbsp;
								</span>
							)}
							{index < footerData.madeBy.length - 1 && (
								<span className="inline md:hidden">
									&nbsp;/&nbsp;
								</span>
							)}
						</React.Fragment>
					))}
				</p>
			</div>
		</footer>
	);
}
