import Navbar from '@/app/components/Shared/Navbar/Navbar';
import Footer from '@/app/components/Shared/Footer/Footer';
import PrivacyBanner from '@/app/components/PrivacyPolicyPage/PrivacyBanner';
import PrivacyFristCompo from '@/app/components/PrivacyPolicyPage/PrivacyFristCompo';
const PrivacyPage = () => {
	return (
		<div className='custom__BG'>
			<div className='fixed top-0 right-0 left-0 z-[1000] w-full header'>
				<Navbar />
			</div>
			<PrivacyBanner />
			<PrivacyFristCompo />
			<Footer></Footer>
		</div>
	);
};

export default PrivacyPage;
