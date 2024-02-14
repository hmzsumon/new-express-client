import Navbar from '@/app/components/Shared/Navbar/Navbar';
import Footer from '@/app/components/Shared/Footer/Footer';
import Packages from '@/app/components/HomePage/NftPackages';
import PackageBanner from '@/app/components/PackagePage/PackageBanner';

const Package = () => {
	return (
		<div className='custom__BG'>
			<div className='fixed top-0 right-0 left-0 z-[1000] w-full header'>
				<Navbar />
			</div>
			<PackageBanner />
			<Packages />
			<Footer />
		</div>
	);
};

export default Package;
