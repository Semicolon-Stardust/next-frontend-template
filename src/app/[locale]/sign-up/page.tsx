'use client';

import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { format, parse } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';
import { PhoneInput } from '@/components/ui/phone-input';

const userSchema = z
	.object({
		name: z
			.string()
			.min(3, { message: 'Name must be at least 3 characters' }),
		email: z.string().email({ message: 'Invalid email address' }),
		username: z
			.string()
			.min(3, { message: 'Username must be at least 3 characters' }),
		dob: z.date({ required_error: 'Date of Birth is required' }),
		password: z
			.string()
			.min(6, { message: 'Password must be at least 6 characters' }),
		confirmPassword: z.string(),
		phone: z.string().min(5, { message: 'Phone number is required' }),
		address: z.string().min(5, { message: 'Address is required' }),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: 'Passwords do not match',
		path: ['confirmPassword'],
	});

type UserFormData = z.infer<typeof userSchema>;

const SignUpForm = () => {
	const userForm = useForm<UserFormData>({
		resolver: zodResolver(userSchema),
	});

	const handleUserSubmit = (data: UserFormData) => {
		console.log('User Sign Up Data:', data);
	};

	return (
		<div
			className={cn(
				'flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-950'
			)}
		>
			<motion.div
				initial={{ opacity: 0, scale: 0.9 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.5 }}
				className="w-full h-auto max-w-4xl p-10 mx-auto bg-white shadow-2xl dark:bg-black rounded-2xl drop-shadow-[0_15px_35px_rgba(0,0,0,0.25)] dark:drop-shadow-[0_15px_35px_rgba(255,255,255,0.25)]"
			>
				<motion.form
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					onSubmit={userForm.handleSubmit(handleUserSubmit)}
					className="space-y-6"
				>
					<div className="flex flex-wrap gap-6">
						<div className="flex-1 min-w-[250px]">
							<Label htmlFor="name">Full Name</Label>
							<Input
								id="name"
								placeholder="Full Name"
								{...userForm.register('name')}
							/>
						</div>
						<div className="flex-1 min-w-[250px]">
							<Label htmlFor="email">Email</Label>
							<Input
								id="email"
								placeholder="Email"
								{...userForm.register('email')}
							/>
						</div>
					</div>
					<Separator />
					<div className="flex flex-wrap gap-6">
						<div className="flex-1 min-w-[250px]">
							<Label htmlFor="username">Username</Label>
							<Input
								id="username"
								placeholder="Username"
								{...userForm.register('username')}
							/>
						</div>
						<div className="flex-1 min-w-[250px]">
							<Label htmlFor="dob">Date of Birth</Label>
							<div className="flex gap-2">
								<Popover>
									<PopoverTrigger asChild>
										<Button
											variant={'outline'}
											className={cn(
												'w-full justify-start text-left font-normal',
												!userForm.watch('dob') &&
													'text-muted-foreground'
											)}
										>
											<CalendarIcon className="w-4 h-4 mr-2" />
											{userForm.watch('dob') ? (
												format(
													userForm.watch('dob'),
													'PPP'
												)
											) : (
												<span>Pick a date</span>
											)}
										</Button>
									</PopoverTrigger>
									<PopoverContent className="w-auto p-0">
										<Calendar
											mode="single"
											selected={userForm.watch('dob')}
											onSelect={(date) =>
												date &&
												userForm.setValue('dob', date)
											}
											initialFocus
										/>
									</PopoverContent>
								</Popover>
								<Input
									type="text"
									placeholder="YYYY-MM-DD"
									value={
										userForm.watch('dob')
											? format(
													userForm.watch('dob'),
													'yyyy-MM-dd'
												)
											: ''
									}
									onChange={(e) => {
										const date = parse(
											e.target.value,
											'yyyy-MM-dd',
											new Date()
										);
										if (!isNaN(date.getTime())) {
											userForm.setValue('dob', date);
										}
									}}
								/>
							</div>
						</div>
					</div>
					<Separator />
					<div className="flex flex-wrap gap-6">
						<div className="flex-1 min-w-[250px]">
							<Label htmlFor="phone">Phone Number</Label>
							<Controller
								name="phone"
								control={userForm.control}
								render={({ field }) => (
									<PhoneInput
										id="phone"
										placeholder="Phone Number"
										defaultCountry="IN"
										{...field}
									/>
								)}
							/>
						</div>
					</div>
					<Separator />
					<div className="flex flex-wrap gap-6">
						<div className="flex-1 min-w-[250px]">
							<Label htmlFor="password">Password</Label>
							<Input
								id="password"
								type="password"
								placeholder="Password"
								{...userForm.register('password')}
							/>
						</div>
						<div className="flex-1 min-w-[250px]">
							<Label htmlFor="confirmPassword">
								Confirm Password
							</Label>
							<Input
								id="confirmPassword"
								type="password"
								placeholder="Confirm Password"
								{...userForm.register('confirmPassword')}
							/>
						</div>
					</div>
					<Separator />
					<Button type="submit" className="w-full">
						Sign Up
					</Button>
					<div className="flex justify-end">
						<Link
							href="/login"
							className="text-sm text-blue-600 dark:text-blue-400"
						>
							Already have an account? Login
						</Link>
					</div>
				</motion.form>
			</motion.div>
		</div>
	);
};

export default SignUpForm;
