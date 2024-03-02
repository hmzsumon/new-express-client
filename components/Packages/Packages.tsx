'use client';
import { LuMoveRight } from 'react-icons/lu';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { TbFreeRights } from 'react-icons/tb';
import { MdWorkspacePremium } from 'react-icons/md';
import { BsRocketTakeoff } from 'react-icons/bs';
import { RiExchangeDollarFill } from 'react-icons/ri';
import weelImg from '@/public/assets/weel.png';
import Image from 'next/image';
import SinglePackage from './SinglePackage';

const packages = [
	{
		id: 1,
		title: 'Free',
		price: 0,
		features: ['UNLOCK MINING', '24/7 EMAIL SUPPORT'],
		icon: <TbFreeRights />,
		bg_color: 'bg-primary',
		subTitle: 'ONLY SIGNUP',
	},
	{
		id: 2,
		title: 'Basic',
		price: 12,
		features: [
			'1 MONTH REGISTRATION',
			'UNLOCK MINING',
			'100 ELC TOKEN',
			'ALL EARNING UNLOCK',
			'24/7 EMAIL SUPPORT',
		],
		icon: <RiExchangeDollarFill />,
		bg_color: 'bg-warning',
		subTitle: 'ONLY REGISTRATION',
	},
	{
		id: 3,
		title: 'Business',
		price: 42,
		features: [
			'7 MONTH SUBSCRIPTION',
			'UNLOCK MINING',
			'650 ELC TOKEN',
			'ALL EARNING UNLOCK',
			'DAILY CASH BACK ($0.02 PER DAY)',
			'24/7 EMAIL SUPPORT',
		],
		icon: <BsRocketTakeoff />,
		bg_color: 'bg-accent',
		subTitle: 'REGISTRATION & 6 MONTH SUBSCRIPTION',
	},
	{
		id: 4,
		title: 'Premium',
		price: 72,
		features: [
			'13 MONTH SUBSCRIPTION',
			'UNLOCK MINING',
			'1250 ELC TOKEN',
			'ALL EARNING UNLOCK',
			'DAILY CASH BACK ($0.05 PER DAY)',
			'24/7 EMAIL SUPPORT',
		],
		icon: <MdWorkspacePremium />,
		bg_color: 'bg-info',
		subTitle: 'REGISTRATION & 12 MONTH SUBSCRIPTION',
	},
];

const Packages = () => {
	useEffect(() => {
		Aos.init({ duration: 1000 });
	}, []);
	return (
		<div className='container relative  mx-auto text-white'>
			<h2
				data-aos='flip-up'
				className='py-2 text-3xl font-bold text-center font-OutFit p-sm'
			>
				Check Out The Most Creative Packages
			</h2>
			<p data-aos='flip-up' className='text-center p-sm'>
				Metaverse is a marketplace dedicated to the digital world.
			</p>
			<Image
				data-aos='zoom-in-up'
				className='rotate__animate absolute top-0 right-0 left-0 md:left-[30%]'
				src={weelImg}
				alt=''
			/>
			<div className='relative grid grid-cols-1 gap-5 px-5 mt-10 md:grid-cols-2 lg:grid-cols-4 md:px-0'>
				{packages.map((pack) => (
					<SinglePackage key={pack.id} pack={pack} />
				))}
			</div>
		</div>
	);
};

export default Packages;
