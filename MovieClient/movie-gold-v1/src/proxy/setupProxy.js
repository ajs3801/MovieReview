const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api/v1/movies', {
      target: 'http://localhost:8080',
      changeOrigin: true,
    }),
  );

  app.use(
    createProxyMiddleware('/api/v1/reviews', {
      target: 'http://localhost:8080',
      changeOrigin: true,
    }),
  );
};