'use client';

import { cn } from '@/lib/utils';
import { Link } from '@/i18n/routing';
import { useState, useEffect } from 'react';
import { Button } from '../button';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ModeToggle } from '@/components/utils/mode-toggle';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const menuVariants = {
	open: {
		opacity: 1,
		height: 'auto',
		transition: {
			duration: 0.5,
			ease: 'easeInOut',
		},
	},
	closed: {
		opacity: 0,
		height: 0,
		transition: {
			duration: 0.5,
			ease: 'easeInOut',
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: -20 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const hoverVariants = {
	hover: { fontFamily: 'font-mono', transition: { duration: 0.3 } },
};

export default function Header() {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<motion.header
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.5 }}
			className={cn(
				'fixed top-0 left-0 w-full z-50 select-none bg-white dark:bg-black',
				scrolled
					? 'backdrop-blur-md border-b border-gray-200 dark:border-gray-700 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] dark:shadow-[0_35px_60px_-15px_rgba(255,255,255,0.3)] transition-shadow duration-500'
					: 'transition-shadow duration-500'
			)}
		>
			<Navbar />
		</motion.header>
	);
}

function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	const t = useTranslations('Header');

	const linksData = [
		{ linkName: t('links.home'), href: '/' },
		{ linkName: t('links.about'), href: '/about' },
		{ linkName: t('links.services'), href: '/services' },
		{ linkName: t('links.contact'), href: '/contact' },
	];

	const buttonsData: {
		text: string;
		variant:
			| 'default'
			| 'secondary'
			| 'link'
			| 'outline'
			| 'destructive'
			| 'ghost';
		className: string;
	}[] = [
		{
			text: t('ctaButtons.signUp'),
			variant: 'default',
			className: 'px-5 py-2',
		},
		{
			text: t('ctaButtons.logIn'),
			variant: 'secondary',
			className: 'px-5 py-2',
		},
	];

	return (
		<motion.div
			initial={false}
			animate={isOpen ? 'open' : 'closed'}
			className={cn(
				'flex flex-col md:flex-row justify-between items-center px-5 md:px-20 lg:px-40 py-1'
			)}
		>
			<motion.div
				initial="hidden"
				animate="visible"
				variants={itemVariants}
				className="flex justify-between items-center w-full md:w-auto"
			>
				<Link href="/" className="flex items-center gap-1">
					{/* Daya Logo */}
					<Image
						src="/daya-logo.svg"
						alt="Daya Logo"
						width={70}
						height={70}
						priority
					/>
					<h1
						className={cn(
							'text-2xl lg:text-3xl font-bold text-black dark:text-white'
						)}
					>
						{t('logo')}
					</h1>
				</Link>
				{/* Hamburger Button for Mobile */}
				<div className="md:hidden">
					<Button
						variant={'link'}
						effect={'shine'}
						className="text-lg font-[300] bg-black text-white dark:bg-white dark:text-black"
						onClick={() => setIsOpen(!isOpen)}
					>
						{isOpen ? <X size={30} /> : <Menu size={30} />}
					</Button>
				</div>
			</motion.div>

			<motion.div
				initial="hidden"
				animate="visible"
				variants={{
					...itemVariants,
					visible: {
						...itemVariants.visible,
						transition: {
							...itemVariants.visible.transition,
							delay: 0.2,
						},
					},
				}}
				className="items-center hidden gap-5 md:flex"
			>
				<Links links={linksData} />
				<CTAButtons buttons={buttonsData} />
				<ModeToggle />
			</motion.div>
			<motion.div
				initial={false}
				animate={isOpen ? 'open' : 'closed'}
				variants={menuVariants}
				className={cn('w-full flex flex-col md:hidden')}
			>
				<AnimatePresence>
					{isOpen && (
						<MobileLinks links={linksData} buttons={buttonsData} />
					)}
				</AnimatePresence>
			</motion.div>
		</motion.div>
	);
}

interface LinkProps {
	links: {
		linkName: string;
		href: string;
	}[];
}

function Links({ links }: LinkProps) {
	return (
		<ul className={cn('flex items-center', '')}>
			{links.map((link) => (
				<motion.li
					key={link.href}
					initial="hidden"
					animate="visible"
					variants={{
						...itemVariants,
						visible: {
							...itemVariants.visible,
							transition: {
								...itemVariants.visible.transition,
								delay: 0.3,
							},
						},
					}}
				>
					<motion.div whileHover="hover" variants={hoverVariants}>
						<Button
							variant={'link'}
							effect={'hoverUnderline'}
							className="text-lg font-[300] text-black dark:text-white"
						>
							<Link href={link.href}>{link.linkName}</Link>
						</Button>
					</motion.div>
				</motion.li>
			))}
		</ul>
	);
}

interface MobileLinksProps {
	links: {
		linkName: string;
		href: string;
	}[];
	buttons: {
		text: string;
		variant:
			| 'default'
			| 'secondary'
			| 'link'
			| 'outline'
			| 'destructive'
			| 'ghost';
		className: string;
	}[];
}

function MobileLinks({ links, buttons }: MobileLinksProps) {
	return (
		<motion.nav
			initial={false}
			animate={'open'}
			exit={'closed'}
			variants={menuVariants}
			className={cn('flex flex-col items-center gap-5 mt-10')}
		>
			<Links links={links} />
			<div className={cn('flex gap-5 mt-5')}>
				{buttons.map((button, index) => (
					<Button
						key={index}
						variant={button.variant}
						className={button.className}
					>
						{button.text}
					</Button>
				))}
			</div>
			<ModeToggle />
		</motion.nav>
	);
}

interface ButtonProps {
	buttons: {
		text: string;
		variant:
			| 'default'
			| 'secondary'
			| 'link'
			| 'outline'
			| 'destructive'
			| 'ghost';
		className: string;
	}[];
}

function CTAButtons({ buttons }: ButtonProps) {
	return (
		<div className={cn('flex gap-5')}>
			{buttons.map((button, index) => (
				<motion.div
					key={index}
					initial="hidden"
					animate="visible"
					variants={{
						...itemVariants,
						visible: {
							...itemVariants.visible,
							transition: {
								...itemVariants.visible.transition,
								delay: 0.4,
							},
						},
					}}
				>
					<Button
						variant={button.variant}
						className={button.className}
					>
						{button.text}
					</Button>
				</motion.div>
			))}
		</div>
	);
}
