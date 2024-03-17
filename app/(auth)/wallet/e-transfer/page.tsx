'use client';
import React, { useState } from 'react';
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import TableBox from '@/components/Box/TableBox';
import { FaCaretRight } from 'react-icons/fa';
import { useSelector } from 'react-redux';

const EarningTransfer = () => {
	const { user } = useSelector((state: any) => state.auth);
	const [amount, setAmount] = useState(0);
	return (
		<TableBox>
			<div>
				<h1 className='text-xl text-center font-semibold text-white mb-4'>
					Earning Transfer
				</h1>
				<div>
					<form className='flex w-full flex-col gap-4 '>
						{/* Balance Info */}
						<div className=' grid grid-cols-5 '>
							<div className='col-span-2 '>
								<div className='mb-2 block '>
									<Label
										htmlFor='email2'
										value='Earned Balance'
										className='text-white'
									/>
								</div>
								<input
									type='text'
									placeholder='Enter Email or Username'
									className={`w-full rounded border-[1.5px] text-gray-300 bg-transparent py-2 px-5 font-medium outline-none transition focus:border-primary active:border-primary`}
									value={`${Number(user?.e_balance).toFixed(2)} USDT`}
									readOnly
								/>
							</div>
							<div className='flex items-center justify-center col-span-1 mt-8 '>
								<FaCaretRight className='text-5xl text-blue-500 flex items-center justify-center' />
							</div>

							<div className='col-span-2'>
								<div className='mb-2 block '>
									<Label
										htmlFor='password2'
										value='Main Balance'
										className='text-white'
									/>
								</div>
								<input
									type='text'
									placeholder='Enter Email or Username'
									className={`w-full rounded border-[1.5px] text-gray-300 bg-transparent py-2 px-5 font-medium outline-none transition focus:border-primary active:border-primary`}
									value={`${Number(user?.m_balance).toFixed(2)} USDT`}
									readOnly
								/>
							</div>
						</div>
						{/*End Balance Info */}

						<div>
							<div className='mb-2 block'>
								<Label
									htmlFor='Enter-amount'
									value='Repeat password'
									className='text-white'
								/>
							</div>
							<input
								type='number'
								placeholder='Enter Amount'
								className={`w-full rounded border-[1.5px] text-gray-300 bg-transparent py-2 px-5 font-medium outline-none transition focus:border-primary active:border-primary`}
								value={`${amount} USDT`}
								onChange={(e: any) => {
									setAmount(e.target.value);
								}}
							/>
						</div>

						<Button type='submit'>
							<span className='text-white'>Transfer</span>
						</Button>
					</form>
				</div>
			</div>
		</TableBox>
	);
};

export default EarningTransfer;
