import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Instagram from "@/Assets/instagram-logo.svg";
import Linkedin from "@/Assets/linkedin-logo.svg";
import Github from "@/Assets/github-logo.svg";
import Discord from "@/Assets/discord-logo.svg";
import X from "@/Assets/x-logo.svg";
import Notion from "@/Assets/notion-logo.svg";
import { useTranslations } from 'next-intl';

export default function Footer() {
	const t = useTranslations("Footer");

	const footerData = {
		logo: {
			name: t("logo"),
			href: "/",
		},
		p: {
			text: t("description"),
		},
		sections: [
			{
				title: t("sections.company.title"),
				links: [
					{ name: t("sections.company.links.aboutUs"), href: "/about" },
					{ name: t("sections.company.links.careers"), href: "/careers" },
					{ name: t("sections.company.links.press"), href: "/press" },
				],
			},
			{
				title: t("sections.resources.title"),
				links: [
					{ name: t("sections.resources.links.blog"), href: "/blog" },
					{ name: t("sections.resources.links.helpCenter"), href: "/help" },
					{ name: t("sections.resources.links.contactSupport"), href: "/support" },
				],
			},
			{
				title: t("sections.legal.title"),
				links: [
					{ name: t("sections.legal.links.privacyPolicy"), href: "/privacy" },
					{ name: t("sections.legal.links.termsOfService"), href: "/terms" },
					{ name: t("sections.legal.links.cookiePolicy"), href: "/cookies" },
				],
			},
		],
		socials: [
			{
				icons: Github,
				name: t("socials.github"),
				href: "",
				color: "bg-black dark:bg-white",
				textColor: "text-white dark:text-black",
			},
			{
				icons: Linkedin,
				name: t("socials.linkedin"),
				href: "",
				color: "bg-blue-600 dark:bg-blue-300",
				textColor: "text-white dark:text-black",
			},
			{
				icons: Instagram,
				name: t("socials.instagram"),
				href: "",
				color: "bg-pink-500 dark:bg-pink-300",
				textColor: "text-white dark:text-black",
			},
			{
				icons: Discord,
				name: t("socials.discord"),
				href: "",
				color: "bg-[#5865F2] dark:bg-[#7289da]",
				textColor: "text-white dark:text-black",
			},
			{
				icons: X,
				name: t("socials.x"),
				href: "",
				color: "bg-black dark:bg-white",
				textColor: "text-white dark:text-black",
			},
			{
				icons: Notion,
				name: t("socials.notion"),
				href: "",
				color: "bg-black dark:bg-white",
				textColor: "text-white dark:text-black",
			},
		],
		madeBy: [
			{
				name: t("madeBy.aryanGulati"),
				href: "",
			},
			{
				name: t("madeBy.neelanjanMukherji"),
				href: "",
			},
		],
	};

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
					{t("socials.title")}
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
						<li
							key={index}
							className="flex flex-row items-center col-span-1 gap-3 md:flex-col"
						>
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
							<span className="flex text-sm md:hidden">
								{social.name}
							</span>
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
					{t("allRightsReserved")}
				</p>
				<p
					className={cn(
						"text-center md:text-right text-gray-500 dark:text-gray-400"
					)}
				>
					{t("designedAndDevelopedBy")}{" "}
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
