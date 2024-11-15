/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/behavioral-dash', // Replace with your repository name
  assetPrefix: '/behavioral-dash/', // Replace with your repository name

  webpack: (config) => {
    config.module.rules.push({
      test: /\.csv$/,
      loader: 'file-loader',
      options: {
        name: 'static/[name].[ext]',
      },
    });
    return config;
  },
};

module.exports = nextConfig;


///** @type {import('next').NextConfig} */
//const nextConfig = {
//  webpack: (config) => {
//    config.module.rules.push({
//      test: /\.csv$/,
//      loader: 'file-loader',
//      options: {
//        name: 'static/[name].[ext]',
//      },
//    });
//    return config;
//  },
//};
//
//module.exports = nextConfig;
