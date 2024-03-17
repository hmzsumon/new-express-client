import TableBox from '@/components/Box/TableBox';
import React from 'react';
import { Button } from 'flowbite-react';

const DailyEarning = () => {
	return (
		<div className='h-screen mt-10'>
			<TableBox>
				<div className=' flex items-center justify-center h-72'>
					<div className='max-w-sm bg-transparent space-y-3'>
						<h5 className='text-2xl text-center font-bold tracking-tight text-white'>
							Daily Earning
						</h5>
						<p className='font-normal  text-center text-gray-400'>
							Daily Earning Start at
						</p>
						<Button>25th March 2024 12:00 AM</Button>
					</div>
				</div>
			</TableBox>
		</div>
	);
};

export default DailyEarning;
