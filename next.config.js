const isProduction = process.env.NODE_ENV === 'production';
const repositoryName = 'behavioral-dash'; // Replace with your repository name

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  basePath: isProduction ? `/${repositoryName}` : '',
  assetPrefix: isProduction ? `/${repositoryName}/` : '',
  trailingSlash: true,

  webpack: (config) => {
    config.module.rules.push({
      test: /\.csv$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        publicPath: `/_next/static/`,
        outputPath: 'static/',
      },
    });
    return config;
  },
};

module.exports = nextConfig;
