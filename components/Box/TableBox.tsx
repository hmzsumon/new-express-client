import React from 'react';

const TableBox = ({ children }: any) => {
	return (
		<div>
			<div className='box'>
				<div className='box-body'>
					<div>{children}</div>
				</div>
				<div className='box-arrow'>
					<div className='box-arrow-top-left'></div>
					<div className='box-arrow-top-right'></div>
					<div className='box-arrow-bottom-left'></div>
					<div className='box-arrow-bottom-right'></div>
				</div>
			</div>
		</div>
	);
};

export default TableBox;
