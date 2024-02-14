import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
	const path = request.nextUrl.pathname;
	const isPublicPath =
		path === '/login' ||
		path === '/signup' ||
		path === '/forgot-password' ||
		path === '/reset-password' ||
		path === '/email-verify' ||
		path === '/404' ||
		path === '/500' ||
		path === '/';
	const token = request.cookies.get('exc-token')?.value || '';

	if (isPublicPath && token) {
		return NextResponse.redirect(
			new URL('/dashboard', request.nextUrl).toString()
		);
	}

	if (!isPublicPath && !token) {
		return NextResponse.redirect(new URL('/login', request.nextUrl).toString());
	}
}

// See "Matching Paths" below to learn more
export const config = {
	matcher: [
		'/',
		'/dashboard',
		'/security',
		'/deposit',
		'/withdraw',
		'/deposit/[depositId]',
		'/withdraw/[withdrawId]',
		'/deposit/deposit-methods',
	],
};
