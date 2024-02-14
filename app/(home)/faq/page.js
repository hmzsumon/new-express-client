import Navbar from '@/app/components/Shared/Navbar/Navbar';
import Footer from '@/app/components/Shared/Footer/Footer';
import FAQBanner from '@/app/components/FAQPage/FAQBanner';
import FAQFristCompo from '@/app/components/FAQPage/FAQFristCompo';
const FAQ = () => {
	return (
		<div className='custom__BG'>
			<div className='fixed top-0 right-0 left-0 z-[1000] w-full header'>
				<Navbar />
			</div>
			<FAQBanner />
			<FAQFristCompo />
			<Footer />
		</div>
	);
};

export default FAQ;
