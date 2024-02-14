import Navbar from '@/app/components/Shared/Navbar/Navbar';
import OurTeamBanner from '@/app/components/OurTeamPage/OurTeamBanner';
import Footer from '@/app/components/Shared/Footer/Footer';
import TeamMembers from '@/app/components/OurTeamPage/TeamMembers';

const OurTeam = () => {
	return (
		<div className='custom__BG'>
			<div className='fixed top-0 right-0 left-0 z-[1000] w-full header'>
				<Navbar />
			</div>
			<OurTeamBanner />
			<TeamMembers />
			<Footer />
		</div>
	);
};

export default OurTeam;
