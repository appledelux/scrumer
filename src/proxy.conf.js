const PROXY_CONFIG = {
  "/rest/*": {
    "target": "https://civica.atlassian.net",
    "secure": false,
    "logLevel": "info",
    "changeOrigin": true,
    cookieDomainRewrite: {
      '*': 'localhost' // all domain cooke rewrite to localhost
    },
    "bypass": function (req, res, proxyOptions) {
      console.log(req.headers);
      req.headers['user-agent'] = 'dummy';
      delete(req.headers["origin"]);
    }
  }
}

module.exports = PROXY_CONFIG;
