import Navbar from '@/app/components/Shared/Navbar/Navbar';
import Footer from '@/app/components/Shared/Footer/Footer';
import FeaturesBanner from '@/app/components/FeaturesPage/FeaturesBanner';
import AccessFuture from '@/app/components/HomePage/AccessFuture';
import AboutMetaverse from '@/app/components/HomePage/AboutMetaverse';
import Partners from '@/app/components/HomePage/Partners';

const Features = () => {
	return (
		<div className='custom__BG'>
			<div className='fixed top-0 right-0 left-0 z-[1000] w-full header'>
				<Navbar />
			</div>
			<FeaturesBanner />
			<AccessFuture />
			<AboutMetaverse />
			<Partners />
			<Footer />
		</div>
	);
};

export default Features;
