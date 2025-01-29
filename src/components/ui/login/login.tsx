'use client';

import ResponsiveModal from '@/components/ui/login/login-modal';
import LoginForm from '@/components/ui/login/login-form';

const Login = () => {
	return (
		<ResponsiveModal triggerText="Login">
			<LoginForm />
		</ResponsiveModal>
	);
};

export default Login;
