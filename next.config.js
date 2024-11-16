const isProduction = process.env.NODE_ENV === 'production';
const repositoryName = 'behavioral-dash';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  basePath: isProduction ? `/${repositoryName}` : '',
  assetPrefix: isProduction ? `/${repositoryName}` : '',
  trailingSlash: true,
  distDir: 'out',

  webpack: (config) => {
    config.module.rules.push({
      test: /\.csv$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        publicPath: isProduction ? `/${repositoryName}/_next/static/` : '/_next/static/',
        outputPath: 'static/',
      },
    });
    return config;
  },
};

module.exports = nextConfig;
