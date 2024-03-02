import React from 'react';
import { LuMoveRight } from 'react-icons/lu';
import { TbFreeRights } from 'react-icons/tb';
// Define the structure of the 'pack' prop
interface Pack {
	id: number;
	title: string;
	price: number;
	features: string[];
	icon: JSX.Element;
	bg_color: string;
	subTitle: string;
}

// Define the props for the SinglePackage component
interface SinglePackageProps {
	pack: Pack;
}

const SinglePackage: React.FC<SinglePackageProps> = ({ pack }) => {
	return (
		<div className='pb-10 overflow-hidden nft__card'>
			<div className='h-full text-center rounded-t bg-slate-900'>
				<div className={`p-3 text-center rounded-t ${pack.bg_color}`}>
					<span className='text-8xl w-[fit-content] mx-auto block py-5'>
						{pack.icon}
					</span>
					<h2 className='mb-3 text-3xl font-bold uppercase font-OutFit'>
						{pack.title}
					</h2>
				</div>
				<h2 className='mt-5 mb-3 text-4xl font-bold font-OutFit'>
					${pack.price}
				</h2>
				<p className='text-xs mb-3 font-semibold uppercase'>{pack.subTitle}</p>
				<ul className='px-3 space-y-2 text-left uppercase list-disc list-inside '>
					{pack.features.map((feature, index) => (
						<li key={index} className='text-[12px] font-semibold'>
							{feature}
						</li>
					))}
				</ul>
			</div>
			<div className='custom__bg__color relative top-[1px] rounded pt-10 nft_hover'>
				<button className='px-6 py-5 mx-auto rounded btn__bg'>
					<span className='mr-2'>Get Started</span>
				</button>
			</div>
		</div>
	);
};

export default SinglePackage;
