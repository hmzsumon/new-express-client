'use client';
import TableBox from '@/components/Box/TableBox';
import React from 'react';
import {
	DataGrid,
	GridRowsProp,
	GridColDef,
	GridToolbar,
	GridFilterModel,
	GridToolbarContainer,
	GridToolbarQuickFilter,
} from '@mui/x-data-grid';
import { useGetUsersQuery } from '@/redux/features/admin/adminUsersApi';
import { formDateWithTime, formatDate } from '@/lib/functions';
import Link from 'next/link';
import { AiFillEye } from 'react-icons/ai';
import { SyncLoader } from 'react-spinners';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { useGetMyTeamQuery } from '@/redux/features/auth/authApi';
import { TbUsersGroup } from 'react-icons/tb';

const theme = createTheme({
	palette: {
		mode: 'dark', // Default to 'light' mode
		// You can customize other palette settings here
	},
});

const CustomToolbar = () => {
	return (
		<GridToolbarContainer
			sx={{
				display: 'flex',
				justifyContent: 'end', // This spaces out the children elements
				alignItems: 'center',
				padding: '10px 24px', // Example padding, adjust as needed
				// Add any other styles you want for the toolbar here
			}}
		>
			<GridToolbarQuickFilter className='mr-6 border ' />
			{/* Add any other buttons or functionality you need here, excluding export */}
		</GridToolbarContainer>
	);
};

const MyTeam = () => {
	const { user } = useSelector((state: any) => state.auth);
	const { data, isLoading, isSuccess, isError, error } = useGetMyTeamQuery(
		user?._id
	);
	const { team } = data || {};

	const records = [
		{
			id: 1,
			level: 'Level-01',
			value: 'level_1',
			amount: team?.level_1?.users?.length || 0,
			j_earn: team?.level_1?.j_earnings || 0,
			s_earn: team?.level_1?.s_earnings || 0,
		},
		{
			id: 2,
			level: 'Level-02',
			value: 'level_2',
			amount: team?.level_2?.users?.length || 0,
			j_earn: team?.level_2?.j_earnings || 0,
			s_earn: team?.level_2?.s_earnings || 0,
		},
		{
			id: 3,
			level: 'Level-03',
			value: 'level_3',
			amount: team?.level_3?.users?.length || 0,
			j_earn: team?.level_3?.j_earnings || 0,
			s_earn: team?.level_3?.s_earnings || 0,
		},
		{
			id: 4,
			level: 'Level-04',
			value: 'level_4',
			amount: team?.level_4?.users?.length || 0,
			j_earn: team?.level_4?.j_earnings || 0,
			s_earn: team?.level_4?.s_earnings || 0,
		},
		{
			id: 5,
			level: 'Level-05',
			value: 'level_5',
			amount: team?.level_5?.users?.length || 0,
			j_earn: team?.level_5?.j_earnings || 0,
			s_earn: team?.level_5?.s_earnings || 0,
		},
		{
			id: 6,
			level: 'Level-06',
			value: 'level_6',
			amount: team?.level_6?.users?.length || 0,
			j_earn: team?.level_6?.j_earnings || 0,
			s_earn: team?.level_6?.s_earnings || 0,
		},
		{
			id: 7,
			level: 'Level-07',
			value: 'level_7',
			amount: team?.level_7?.users?.length || 0,
			j_earn: team?.level_7?.j_earnings || 0,
			s_earn: team?.level_7?.s_earnings || 0,
		},
		{
			id: 8,
			level: 'Level-08',
			value: 'level_8',
			amount: team?.level_8?.users?.length || 0,
			j_earn: team?.level_8?.j_earnings || 0,
			s_earn: team?.level_8?.s_earnings || 0,
		},
		{
			id: 9,
			level: 'Level-09',
			value: 'level_9',
			amount: team?.level_9?.users?.length || 0,
			j_earn: team?.level_9?.j_earnings || 0,
			s_earn: team?.level_9?.s_earnings || 0,
		},
		{
			id: 10,
			level: 'Level-10',
			value: 'level_10',
			amount: team?.level_10?.users?.length || 0,
			j_earn: team?.level_10?.j_earnings || 0,
			s_earn: team?.level_10?.s_earnings || 0,
		},
		{
			id: 11,
			level: 'Level-11',
			value: 'level_11',
			amount: team?.level_11?.users?.length || 0,
			j_earn: team?.level_11?.j_earnings || 0,
			s_earn: team?.level_11?.s_earnings || 0,
		},
		{
			id: 12,
			level: 'Level-12',
			value: 'level_12',
			amount: team?.level_12?.users?.length || 0,
			j_earn: team?.level_12?.j_earnings || 0,
			s_earn: team?.level_12?.s_earnings || 0,
		},
	];

	const [filterModel, setFilterModel] = React.useState<GridFilterModel>({
		items: [],
		quickFilterValues: [''],
	});
	const [ignoreDiacritics, setIgnoreDiacritics] = React.useState(true);

	const columns: GridColDef<any>[] = [
		{
			field: 'level',
			headerName: 'Level',
			width: 150,
			renderCell: (params: any) => (
				<div className='flex items-center gap-2 text-xs'>
					<p>{params.row.level}</p>
				</div>
			),
		},

		{
			field: 'amount',
			headerName: 'Users',
			width: 150,
			renderCell: (params: any) => (
				<div className='flex items-center gap-2 text-xs'>
					<p>{params.row.amount}</p>
					<TbUsersGroup />
				</div>
			),
		},

		{
			field: 'activeUsers',
			headerName: 'Active Users',
			width: 150,
			renderCell: (params: any) => (
				<div className='flex items-center gap-2 text-xs'>
					<p>{params.row.amount}</p>
					<TbUsersGroup />
				</div>
			),
		},

		{
			field: 'j_earn',
			headerName: 'J. Earning',
			width: 130,
			renderCell: (params: any) => (
				<div className='flex items-center gap-2 text-xs'>
					<p>
						{Number(params.row.j_earn || 0).toLocaleString('en-US', {
							maximumFractionDigits: 6,
							minimumFractionDigits: 2,
						})}{' '}
						USDT
					</p>
				</div>
			),
		},

		{
			field: 's_earn',
			headerName: 'S. Earning',
			width: 130,
			renderCell: (params: any) => (
				<div className='flex items-center gap-2 text-xs'>
					<p>
						{Number(params.row.s_earn || 0).toLocaleString('en-US', {
							maximumFractionDigits: 6,
							minimumFractionDigits: 2,
						})}{' '}
						USDT
					</p>
				</div>
			),
		},
		{
			field: 'pull_earn',
			headerName: 'P. Earning',
			width: 130,
			renderCell: (params: any) => (
				<div className='flex items-center gap-2 text-xs'>
					<p>
						{Number(params.row.pull_earn || 0).toLocaleString('en-US', {
							maximumFractionDigits: 6,
							minimumFractionDigits: 2,
						})}{' '}
						USDT
					</p>
				</div>
			),
		},
		{
			field: 'totalEarning',
			headerName: 'Total Earning',
			width: 130,
			renderCell: (params: any) => (
				<div className='flex items-center gap-2 text-xs'>
					<p>
						{Number(params.row.totalEarning || 0).toLocaleString('en-US', {
							maximumFractionDigits: 6,
							minimumFractionDigits: 2,
						})}{' '}
						USDT
					</p>
				</div>
			),
		},
	];

	const rows: any = [];

	records &&
		records.map((record: any) => {
			return rows.push({
				id: record.id,
				level: record.level,
				amount: record.amount,
				activeUsers: record.activeUsers,
				j_earn: record.j_earn,
				s_earn: record.s_earn,
				pull_earn: record.pull_earn,
				totalEarning: record.j_earn + record.s_earn + record.pull_earn,
			});
		});
	return (
		<div>
			{isLoading ? (
				<div className='flex items-center justify-center '>
					<SyncLoader color='#EAB308' size={10} />
				</div>
			) : (
				<ThemeProvider theme={theme}>
					<DataGrid
						key={ignoreDiacritics.toString()}
						rows={rows}
						columns={columns}
						filterModel={filterModel}
						onFilterModelChange={setFilterModel}
						disableColumnSelector
						disableDensitySelector
						hideFooter
						slots={{ toolbar: CustomToolbar }}
						slotProps={{ toolbar: { showQuickFilter: true } }}
						ignoreDiacritics={ignoreDiacritics}
					/>
				</ThemeProvider>
			)}
		</div>
	);
};

export default MyTeam;
