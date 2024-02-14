let ioBaseUrl = '';
if (process.env.NODE_ENV === 'development') {
	// Code specific to development mode
	ioBaseUrl = 'http://localhost:5005';
	console.log('Running in development mode');
} else {
	ioBaseUrl = 'https://express-api1-be08a1c77321.herokuapp.com';
	// Code specific to production mode
	console.log('Running in production mode');
}
console.log('baseUrl', ioBaseUrl);
export default ioBaseUrl;
