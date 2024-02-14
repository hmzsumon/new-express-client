import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa6';
import Team1 from '@/public/assets/team1.jpg';
import Team2 from '@/public/assets/team2.jpg';
import Team3 from '@/public/assets/team3.jpg';
import Team4 from '@/public/assets/team4.jpg';
import Team5 from '@/public/assets/team5.jpg';
import Team6 from '@/public/assets/team6.jpg';
import Team7 from '@/public/assets/team7.jpg';
import Team8 from '@/public/assets/team8.jpg';
import Image from 'next/image';

const TeamMembers = () => {
	return (
		<div className='py-20'>
			<div className='container px-5 mx-auto md:px-0'>
				<div className='mb-10'>
					<h2 className='py-2 text-3xl font-bold text-center text-white font-OutFit p-sm'>
						Our Professional Team
					</h2>
					<p className='text-center text-white p-sm'>
						We are at your service with our competent staff.
					</p>
				</div>
				<div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4'>
					<div className='overflow-hidden cursor-pointer team__box'>
						<Image
							className='w-full duration-300 rounded-t team__img'
							src={Team1}
							alt=''
						/>
						<div className='relative justify-center flex-none p-5 text-center duration-300 rounded-b btn__bg team__info'>
							<div className=''>
								<h5 className='text-xl font-bold'>Suzanne Redfern</h5>
								<p className='mt-2 text-sm text-slate-200'>CEO</p>
								<div className='flex items-center justify-center gap-3 mt-5'>
									<a href=''>
										<FaFacebookF />
									</a>
									<a href=''>
										<FaInstagram />
									</a>
									<a href=''>
										<FaTwitter />
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className='overflow-hidden cursor-pointer team__box'>
						<Image
							className='w-full duration-300 rounded-t team__img'
							src={Team2}
							alt=''
						/>
						<div className='relative justify-center flex-none p-5 text-center duration-300 rounded-b btn__bg team__info'>
							<div className=''>
								<h5 className='text-xl font-bold'>Anita Catherine Murray</h5>
								<p className='mt-2 text-sm text-slate-200'>Founder</p>
								<div className='flex items-center justify-center gap-3 mt-5'>
									<a href='#'>
										<FaFacebookF />
									</a>
									<a href='#'>
										<FaInstagram />
									</a>
									<a href='#'>
										<FaTwitter />
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className='overflow-hidden cursor-pointer team__box'>
						<Image
							className='w-full duration-300 rounded-t team__img'
							src={Team3}
							alt=''
						/>
						<div className='relative justify-center flex-none p-5 text-center duration-300 rounded-b btn__bg team__info'>
							<div className=''>
								<h5 className='text-xl font-bold'>Akio Tanaka</h5>
								<p className='mt-2 text-sm text-slate-200'>
									Asia Continent Manager
								</p>
								<div className='flex items-center justify-center gap-3 mt-5'>
									<a href='#'>
										<FaFacebookF />
									</a>
									<a href='#'>
										<FaInstagram />
									</a>
									<a href='#'>
										<FaTwitter />
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className='overflow-hidden cursor-pointer team__box'>
						<Image
							className='w-full duration-300 rounded-t team__img'
							src={Team4}
							alt=''
						/>
						<div className='relative justify-center flex-none p-5 text-center duration-300 rounded-b btn__bg team__info'>
							<div className=''>
								<h5 className='text-xl font-bold'>Nia Jomo</h5>
								<p className='mt-2 text-sm text-slate-200'>
									Africa Continent Manager
								</p>
								<div className='flex items-center justify-center gap-3 mt-5'>
									<a href=''>
										<FaFacebookF />
									</a>
									<a href=''>
										<FaInstagram />
									</a>
									<a href=''>
										<FaTwitter />
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className='overflow-hidden cursor-pointer team__box'>
						<Image
							className='w-full duration-300 rounded-t team__img'
							src={Team5}
							alt=''
						/>
						<div className='relative justify-center flex-none p-5 text-center duration-300 rounded-b btn__bg team__info'>
							<div className=''>
								<h5 className='text-xl font-bold'>Luca Rossi</h5>
								<p className='mt-2 text-sm text-slate-200'>
									Europe Continent Manager
								</p>
								<div className='flex items-center justify-center gap-3 mt-5'>
									<a href=''>
										<FaFacebookF />
									</a>
									<a href=''>
										<FaInstagram />
									</a>
									<a href=''>
										<FaTwitter />
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className='overflow-hidden cursor-pointer team__box'>
						<Image
							className='w-full duration-300 rounded-t team__img'
							src={Team6}
							alt=''
						/>
						<div className='relative justify-center flex-none p-5 text-center duration-300 rounded-b btn__bg team__info'>
							<div className=''>
								<h5 className='text-xl font-bold'>Ethan Reynolds</h5>
								<p className='mt-2 text-sm text-slate-200'>
									North America Continent Manager
								</p>
								<div className='flex items-center justify-center gap-3 mt-5'>
									<a href=''>
										<FaFacebookF />
									</a>
									<a href=''>
										<FaInstagram />
									</a>
									<a href=''>
										<FaTwitter />
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className='overflow-hidden cursor-pointer team__box'>
						<Image
							className='w-full duration-300 rounded-t team__img'
							src={Team7}
							alt=''
						/>
						<div className='relative justify-center flex-none p-5 text-center duration-300 rounded-b btn__bg team__info'>
							<div className=''>
								<h5 className='text-xl font-bold'>Isabella Silva</h5>
								<p className='mt-2 text-sm text-slate-200'>
									South America Continent Manager
								</p>
								<div className='flex items-center justify-center gap-3 mt-5'>
									<a href='#'>
										<FaFacebookF />
									</a>
									<a href='#'>
										<FaInstagram />
									</a>
									<a href='#'>
										<FaTwitter />
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className='overflow-hidden cursor-pointer team__box'>
						<Image
							className='w-full duration-300 rounded-t team__img'
							src={Team8}
							alt=''
						/>
						<div className='relative justify-center flex-none p-5 text-center duration-300 rounded-b btn__bg team__info'>
							<div className=''>
								<h5 className='text-xl font-bold'>Liam Harper</h5>
								<p className='mt-2 text-sm text-slate-200'>
									Australia Continent Manager
								</p>
								<div className='flex items-center justify-center gap-3 mt-5'>
									<a href='#'>
										<FaFacebookF />
									</a>
									<a href='#'>
										<FaInstagram />
									</a>
									<a href='#'>
										<FaTwitter />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TeamMembers;
