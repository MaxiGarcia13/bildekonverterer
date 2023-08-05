const isDev = process.env.NODE_ENV === 'development';

const apiDomain = process.env.API_URL;
const apiUrl = `${apiDomain}/api`;

const config = { isDev, apiUrl };

export default config;
