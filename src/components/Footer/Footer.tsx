import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, Github } from "lucide-react";

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
			color: "#000000",
			textColor: "#ffffff",
		},
		{
			icons: Linkedin,
			name: "LinkedIn",
			href: "",
			color: "#0077B5",
			textColor: "#ffffff",
		},
		{
			icons: Instagram,
			name: "Instagram",
			href: "",
			color: "#833AB4",
			textColor: "#ffffff",
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
				"backdrop-blur-md bg-white/30",
				"border-t border-gray-200",
				"shadow-[0_-35px_60px_-15px_rgba(0,0,0,0.1)]",
				"grid grid-cols-1 md:grid-cols-4 gap-8 justify-center items-start"
			)}
		>
			<div className="col-span-1 text-center md:col-span-4 md:text-left">
				<Link href={footerData.logo.href}>
					<h1 className={cn("text-4xl font-bold text-black")}>
						{footerData.logo.name}
					</h1>
				</Link>
				<p className="mt-2">{footerData.p.text}</p>
			</div>
			{footerData.sections.map((section, index) => (
				<div key={index} className="col-span-1">
					<h2 className={cn("text-xl font-bold text-black font-mono")}>
						{section.title}
					</h2>
					<div className={cn("bg-black", "h-0.5", "w-10")}></div>
					<ul className={cn("mt-2 space-y-2")}>
						{section.links.map((link, index) => (
							<li key={index}>
								<Button
									variant="link"
									effect="hoverUnderline"
									className={cn(`text-${link}`)}
								>
									<Link href={link.href}>{link.name}</Link>
								</Button>
							</li>
						))}
					</ul>
				</div>
			))}
			<div>
				<h2 className={cn("text-xl font-bold text-black font-mono")}>Socials</h2>
				<div className={cn("bg-black", "h-0.5", "w-10")}></div>
				<ul
					className={cn(
						"flex items-center justify-center md:justify-start mt-2 space-x-2 gap-6"
					)}
				>
					{footerData.socials.map((social, index) => (
						<li key={index}>
							<Button
								className={cn(`bg-[${social.color}]`)}
								variant="link"
								effect="ringHover"
							>
								<Link href={social.href} className={cn()}>
									<social.icons color={`black`} size={"50"} />
								</Link>
							</Button>
						</li>
					))}
				</ul>
			</div>
			<div className="flex flex-col items-center justify-center col-span-1 pt-4 mt-4 space-y-2 border-t border-gray-200 md:col-span-4 md:flex-row md:justify-between md:space-y-0">
				<p className={cn("text-center md:text-left text-gray-500")}>
					&copy; {new Date().getFullYear()} {footerData.logo.name}.
					All rights reserved.
				</p>
				<p className={cn("text-center md:text-right text-gray-500")}>
					Designed and developed by{" "}
					{footerData.madeBy.map((madeBy, index) => (
						<React.Fragment key={index}>
							<Button variant="link" effect="hoverUnderline">
								<Link href={madeBy.href}>{madeBy.name}</Link>
							</Button>
							{index < footerData.madeBy.length - 1 && (
								<span className="hidden md:inline">&nbsp;&amp;&nbsp;</span>
							)}
							{index < footerData.madeBy.length - 1 && (
								<span className="inline md:hidden">&nbsp;/&nbsp;</span>
							)}
						</React.Fragment>
					))}
				</p>
			</div>
		</footer>
	);
}
