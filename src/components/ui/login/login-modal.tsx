'use client';

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import LoginForm from '@/components/ui/login/login-form';
import { useTranslations } from 'next-intl';

interface LoginModalProps {
    className?: string;
	buttonVariant:
		| 'default'
		| 'destructive'
		| 'outline'
		| 'secondary'
		| 'ghost'
		| 'link';
	buttonEffect:
		| 'expandIcon'
		| 'ringHover'
		| 'shine'
		| 'shineHover'
		| 'gooeyRight'
		| 'gooeyLeft'
		| 'underline'
		| 'hoverUnderline'
		| null
		| undefined;
}

const LoginModal: React.FC<LoginModalProps> = ({
	buttonVariant,
    className,
	buttonEffect,
}) => {
	const t = useTranslations('Login');
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant={buttonVariant} effect={buttonEffect} className={className}>
					{t('title')}
				</Button>
			</DialogTrigger>
			<DialogContent className="w-full max-w-2xl p-10 b</DialogTrigger>g-white dark:bg-black rounded-2xl">
				<DialogHeader>
					<DialogTitle>{t('title')}</DialogTitle>
					<DialogDescription>{t('description')}</DialogDescription>
				</DialogHeader>
				<LoginForm />
			</DialogContent>
		</Dialog>
	);
};

export default LoginModal;
