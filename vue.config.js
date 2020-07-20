module.exports = {
    publicPath: process.env.NODE_ENV === 'prodution' ? '././' : './',
    devServer: {
        proxy: {
            '/weather': {
                target: 'https://community-open-weather-map.p.rapidapi.com/'
            },
            '/api/v1': {
                target: 'https://wallhaven.cc/'
            }
        }
    }
};
