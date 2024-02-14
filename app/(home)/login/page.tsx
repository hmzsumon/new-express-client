import LoginBanner from '@/app/components/Login/LoginBanner';
import LoginPage from '@/app/components/Login/LoginPage';
import Footer from '@/app/components/Shared/Footer/Footer';
import Navbar from '@/app/components/Shared/Navbar/Navbar';

const Login = () => {
	return (
		<div className='custom__BG'>
			<div className='fixed top-0 right-0 left-0 z-[1000] w-full header'>
				<Navbar />
			</div>
			<div className=' z-[-100]'>
				<LoginBanner />
				<LoginPage />
			</div>
			<Footer />
		</div>
	);
};

export default Login;
