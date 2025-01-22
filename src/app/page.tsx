import { cn } from "@/lib/utils";

export default function Page() {
    return (
        <div className={cn(
            "flex items-center justify-center min-h-screen",
            "bg-white dark:bg-gray-900/30",
            "text-black dark:text-white"
        )}>
            Bye, World
        </div>
    );
}