/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      { source: '/services', destination: '/' },
      { source: '/products', destination: '/' },
      { source: '/blog', destination: '/' },
      { source: '/about', destination: '/' },
      { source: '/contact', destination: '/' },
      { source: '/cart', destination: '/' },
      { source: '/wishlist', destination: '/' },
      { source: '/downloads', destination: '/' },
      { source: '/profile', destination: '/' },
      { source: '/store', destination: '/' },
      { source: '/thankyou', destination: '/' }
    ];
  }
};

export default nextConfig;
