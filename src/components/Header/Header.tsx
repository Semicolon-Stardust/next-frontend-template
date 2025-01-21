"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const menuVariants = {
    open: {
        opacity: 1,
        height: "auto",
        transition: {
            duration: 0.5,
            ease: "easeInOut",
        },
    },
    closed: {
        opacity: 0,
        height: 0,
        transition: {
            duration: 0.5,
            ease: "easeInOut",
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const hoverVariants = {
    hover: { fontFamily: "font-mono", transition: { duration: 0.3 } },
};

const linksData = [
    { linkName: "Home", href: "/" },
    { linkName: "About", href: "/about" },
    { linkName: "Services", href: "/services" },
    { linkName: "Contact", href: "/contact" },
];

const buttonsData: { text: string; variant: "default" | "secondary" | "link" | "outline" | "destructive" | "ghost"; className: string }[] = [
    { text: "Sign Up", variant: "default", className: "px-5 py-2" },
    { text: "Log In", variant: "secondary", className: "px-5 py-2" },
];

export default function Header() {
    return (
        <header className={cn("fixed top-0 left-0 w-full z-50 select-none")}>
            <Navbar />
        </header>
    );
}

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial={false}
            animate={isOpen ? "open" : "closed"}
            className={cn(
                "flex flex-col md:flex-row justify-between items-center px-5 md:px-20 lg:px-40 py-5",
                "backdrop-blur-md bg-white/30",
                "border-b border-gray-200 shadow-md"
            )}
        >
            <motion.div
                initial="hidden"
                animate="visible"
                variants={itemVariants}
                className="flex justify-between w-full md:w-auto"
            >
                <Link href="/">
                    <h1 className={cn("text-4xl font-bold text-black")}>
                        Logo
                    </h1>
                </Link>
                <div className="md:hidden">
                    <Button
                        variant={"link"}
                        effect={"shine"}
                        className="text-lg font-[300] bg-black text-white"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={30} /> : <Menu size={30} />}
                    </Button>
                </div>
            </motion.div>
            <motion.div
                initial="hidden"
                animate="visible"
                variants={{ ...itemVariants, visible: { ...itemVariants.visible, transition: { ...itemVariants.visible.transition, delay: 0.2 } } }}
                className="items-center hidden gap-5 md:flex"
            >
                <Links links={linksData} />
                <CTAButtons buttons={buttonsData} />
            </motion.div>
            <motion.div
                initial={false}
                animate={isOpen ? "open" : "closed"}
                variants={menuVariants}
                className={cn("w-full flex flex-col md:hidden")}
            >
                <AnimatePresence>{isOpen && <MobileLinks />}</AnimatePresence>
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
        <ul className={cn("flex items-center", "")}>
            {links.map((link) => (
                <motion.li
                    key={link.href}
                    initial="hidden"
                    animate="visible"
                    variants={{ ...itemVariants, visible: { ...itemVariants.visible, transition: { ...itemVariants.visible.transition, delay: 0.3 } } }}
                >
                    <motion.div
                        whileHover="hover"
                        variants={hoverVariants}
                    >
                        <Button
                            variant={"link"}
                            effect={"hoverUnderline"}
                            className="text-lg font-[300]"
                        >
                            <Link href={link.href}>{link.linkName}</Link>
                        </Button>
                    </motion.div>
                </motion.li>
            ))}
        </ul>
    );
}

function MobileLinks() {
    return (
        <motion.nav
            initial={false}
            animate={"open"}
            exit={"closed"}
            variants={menuVariants}
            className={cn("flex flex-col items-center gap-5 mt-10")} // Added mt-10 for margin-top
        >
            <Links links={linksData} />
            <div className={cn("flex gap-5 mt-5")}>
                {buttonsData.map((button, index) => (
                    <Button key={index} variant={button.variant} className={button.className}>
                        {button.text}
                    </Button>
                ))}
            </div>
        </motion.nav>
    );
}

interface ButtonProps {
    buttons: {
        text: string;
        variant: "default" | "secondary" | "link" | "outline" | "destructive" | "ghost";
        className: string;
    }[];
}

function CTAButtons({ buttons }: ButtonProps) {
    return (
        <div className={cn("flex gap-5")}>
            {buttons.map((button, index) => (
                <motion.div
                    key={index}
                    initial="hidden"
                    animate="visible"
                    variants={{ ...itemVariants, visible: { ...itemVariants.visible, transition: { ...itemVariants.visible.transition, delay: 0.4 } } }}
                >
                    <Button variant={button.variant} className={button.className}>
                        {button.text}
                    </Button>
                </motion.div>
            ))}
        </div>
    );
}
