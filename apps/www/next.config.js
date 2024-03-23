const dotenv = require('dotenv');
dotenv.config();

const _port = process.env.PORT;
const strapi_url = process.env.NEXT_PUBLIC_STRAPI_URL || "http://127.0.0.1:1337";
const contain_port = /:\d+/.test(strapi_url);

// Yes I know, this is a bad way to do it, but I'm lazy :)
const url = contain_port ? strapi_url : _port ? `${strapi_url}:${_port}` : strapi_url;

const strapi = new URL(url);
const port = url.split(":")[2]?.replaceAll("/", "");

/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: [],
  images: {
    remotePatterns: [
      {
        protocol: strapi.protocol.slice(0, -1),
        hostname: strapi.hostname,
        port: port,
      },
      {
        protocol: 'https',
        hostname: 'dash.deftdodo.dev',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      }
    ]
  }
};
