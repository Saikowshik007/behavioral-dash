const nextConfig = {
  // Remove output: 'export' as it forces static generation
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,

  // Remove basePath and assetPrefix as Vercel handles this automatically

  // Remove distDir: 'out' as Vercel uses .next by default

  webpack: (config) => {
    config.module.rules.push({
      test: /\.csv$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        // Update publicPath to work with Vercel
        publicPath: '/_next/static/',
        outputPath: 'static/',
      },
    });
    return config;
  },
};

module.exports = nextConfig