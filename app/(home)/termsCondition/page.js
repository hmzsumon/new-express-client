import Navbar from '@/app/components/Shared/Navbar/Navbar';
import Footer from '@/app/components/Shared/Footer/Footer';
import TermsBanner from '@/app/components/TermsConditionPage/TermsBanner';
import TermsFristCompo from '@/app/components/TermsConditionPage/TermsFristCompo';

const TermsConditionPage = () => {
	return (
		<div className='custom__BG'>
			<div className='fixed top-0 right-0 left-0 z-[1000] w-full header'>
				<Navbar />
			</div>
			<TermsBanner />
			<TermsFristCompo />
			<Footer />
		</div>
	);
};

export default TermsConditionPage;
