/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: [],
  images: {
    remotePatterns: [{
      protocol: 'http',
      hostname: '127.0.0.1',
      port: '1337',
    }]
  }
};
