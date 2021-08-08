const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        proxy("/signup/", {
            target: "https://nwadaily-emailer.herokuapp.com",
            changeOrigin: true
        })
    );

    app.use(
        proxy("/share/", {
            target: "https://nwadaily-emailer.herokuapp.com",
            changeOrigin: true
        })
    );
};