/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/oppskrifter/:slug*',
        destination: '/recipes/:slug*',
      },
      {
        source: '/logg-inn',
        destination: '/login',
      },
      {
        source: '/registrer',
        destination: '/register',
      },
    ]
  },
}
