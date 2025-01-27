'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';
import { Link } from '@/i18n/routing';

const userSchema = z.object({
	email: z.string().email({ message: 'Invalid email address' }),
	password: z
		.string()
		.min(6, { message: 'Password must be at least 6 characters' }),
});

const adminSchema = z.object({
	username: z
		.string()
		.min(3, { message: 'Username must be at least 3 characters' }),
	password: z
		.string()
		.min(6, { message: 'Password must be at least 6 characters' }),
	notes: z.string().optional(),
});

type UserFormData = z.infer<typeof userSchema>;
type AdminFormData = z.infer<typeof adminSchema>;

const LoginForm = () => {
	const [activeTab, setActiveTab] = useState<'user' | 'admin'>('user');

	const userForm = useForm<UserFormData>({
		resolver: zodResolver(userSchema),
	});

	const adminForm = useForm<AdminFormData>({
		resolver: zodResolver(adminSchema),
	});

	const handleUserSubmit = (data: UserFormData) => {
		console.log('User Login Data:', data);
	};

	const handleAdminSubmit = (data: AdminFormData) => {
		console.log('Admin Login Data:', data);
	};

	return (
		<div
			className={cn(
				'flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900'
			)}
		>
			<motion.div
				initial={{ opacity: 0, scale: 0.9 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.5 }}
				className="w-full max-w-2xl p-10 mx-auto bg-white shadow-2xl dark:bg-gray-800 rounded-2xl h-[600px]"
			>
				<Tabs
					value={activeTab}
					onValueChange={(value) =>
						setActiveTab(value as 'user' | 'admin')
					}
					className="flex flex-col"
				>
					<div className="">
						<TabsList className="grid grid-cols-2 gap-4 mb-6">
							<TabsTrigger value="user">User Login</TabsTrigger>
							<TabsTrigger value="admin">Admin Login</TabsTrigger>
						</TabsList>
					</div>
					<div className={cn('')}>
						<TabsContent value="user">
							<motion.form
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5 }}
								onSubmit={userForm.handleSubmit(
									handleUserSubmit
								)}
								className="space-y-6"
							>
								<div>
									<label
										htmlFor="email"
										className="block text-sm font-medium text-gray-700 dark:text-gray-300"
									>
										Email
									</label>
									<Input
										id="email"
										type="email"
										{...userForm.register('email')}
									/>
									{userForm.formState.errors.email && (
										<p className="mt-1 text-sm text-red-500">
											{
												userForm.formState.errors.email
													.message
											}
										</p>
									)}
								</div>
								<div>
									<label
										htmlFor="password"
										className="block text-sm font-medium text-gray-700 dark:text-gray-300"
									>
										Password
									</label>
									<Input
										id="password"
										type="password"
										{...userForm.register('password')}
									/>
									{userForm.formState.errors.password && (
										<p className="mt-1 text-sm text-red-500">
											{
												userForm.formState.errors
													.password.message
											}
										</p>
									)}
								</div>
								<Button type="submit" className="w-full">
									Login as User
								</Button>
								<div className="flex justify-between mt-4">
									<Link
										href="/forgot-password"
										className="text-sm text-blue-600 dark:text-blue-400"
									>
										Forgot Password?
									</Link>
									<Link
										href="/signup"
										className="text-sm text-blue-600 dark:text-blue-400"
									>
										New User? Sign Up
									</Link>
								</div>
								<Separator />
								<div className="grid mt-8">
									<Button variant={'outline'}>
										<svg
											className="w-4 h-auto mr-2"
											width={46}
											height={47}
											viewBox="0 0 46 47"
											fill="none"
										>
											<path
												d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z"
												fill="#4285F4"
											/>
											<path
												d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
												fill="#34A853"
											/>
											<path
												d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
												fill="#FBBC05"
											/>
											<path
												d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
												fill="#EB4335"
											/>
										</svg>
										Login as User with Google
									</Button>
								</div>
							</motion.form>
						</TabsContent>

						<TabsContent value="admin">
							<motion.form
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5 }}
								onSubmit={adminForm.handleSubmit(
									handleAdminSubmit
								)}
								className="space-y-6"
							>
								<div>
									<label
										htmlFor="username"
										className="block text-sm font-medium text-gray-700 dark:text-gray-300"
									>
										Username
									</label>
									<Input
										id="username"
										{...adminForm.register('username')}
									/>
									{adminForm.formState.errors.username && (
										<p className="mt-1 text-sm text-red-500">
											{
												adminForm.formState.errors
													.username.message
											}
										</p>
									)}
								</div>
								<div>
									<label
										htmlFor="password"
										className="block text-sm font-medium text-gray-700 dark:text-gray-300"
									>
										Password
									</label>
									<Input
										id="password"
										type="password"
										{...adminForm.register('password')}
									/>
									{adminForm.formState.errors.password && (
										<p className="mt-1 text-sm text-red-500">
											{
												adminForm.formState.errors
													.password.message
											}
										</p>
									)}
								</div>
								<Button type="submit" className="w-full">
									Login as Admin
								</Button>
								<div className="flex justify-between mt-4">
									<Link
										href="/forgot-password"
										className="text-sm text-blue-600 dark:text-blue-400"
									>
										Forgot Password?
									</Link>
									<Link
										href="/signup"
										className="text-sm text-blue-600 dark:text-blue-400"
									>
										Not an Admin? Sign Up
									</Link>
								</div>
								<Separator />
								<div className="grid mt-8">
									<Button variant={'outline'}>
										<svg
											className="w-4 h-auto mr-2"
											width={46}
											height={47}
											viewBox="0 0 46 47"
											fill="none"
										>
											<path
												d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z"
												fill="#4285F4"
											/>
											<path
												d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
												fill="#34A853"
											/>
											<path
												d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
												fill="#FBBC05"
											/>
											<path
												d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
												fill="#EB4335"
											/>
										</svg>
										Login as Admin with Google
									</Button>
								</div>
							</motion.form>
						</TabsContent>
					</div>
				</Tabs>
			</motion.div>
		</div>
	);
};

export default LoginForm;
