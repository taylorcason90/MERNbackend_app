const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api/pexels',
    createProxyMiddleware({
      target: 'https://api.pexels.com',
      changeOrigin: true,
      pathRewrite: { '^/api/pexels': '' },
    })
  );
};
