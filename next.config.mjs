/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  // assetPrefix: "https://static-uat.rivexa.com",
  // crossOrigin: "anonymous",
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/,
      type: "asset/resource",
      generator: {
        filename: "static/media/[name].[hash][ext]",
      },
    });
    config.optimization.minimize = true;
    config.optimization.splitChunks = {
      chunks: "all",
      minSize: 5000,
      maxSize: 50000,
      maxInitialRequests: 30,
      maxAsyncRequests: 30,
      automaticNameDelimiter: '-',
      cacheGroups: {
        styles: {
          name: "styles",
          test: /\.css$/,
          chunks: "all",
          enforce: true,
        },
      },
    };
    config.cache = {
      type: "filesystem",
    };

    return config;
  },
  env: {
    NEXT_PUBLIC_APP_CUSTOMER_ROOT_URL: "https://uat-customer.rivexa.com/",
    NEXT_PUBLIC_APP_API_ENDPOINT: "https://uat-customer.rivexa.com/",
    NEXT_PUBLIC_APP_ROOT_URL: "https://uat.rivexa.com",
    NEXT_PUBLIC_APP_BLOGS_API_URL: "https://uat-blogs.rivexa.com/api/v3/",
    NEXT_PUBLIC_ASSETS_PATH_URL: "https://static-uat.rivexa.com",
    // NEXT_PUBLIC_APP_CUSTOMER_ROOT_URL: "https://customer.rivexa.com/",
    // NEXT_PUBLIC_APP_API_ENDPOINT: "https://customer.rivexa.com/",
    // NEXT_PUBLIC_APP_ROOT_URL: "https://www.rivexa.com",
    // NEXT_PUBLIC_APP_BLOGS_API_URL: "https://blogs.rivexa.com/api/v3/",
    NEXT_PUBLIC_APP_REGION: "ap-south-1",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "uat-portal.rivexa.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "portal.rivexa.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "static-uat.rivexa.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "flagcdn.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "empdataprivacy.s3.ap-south-1.amazonaws.com",
        pathname: "**",
      },
    ],
  },
  experimental: {
    nextScriptWorkers: true,
    cssChunking: "loose",
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: `
              default-src 'self' https://static-uat.rivexa.com https://empdataprivacy.s3.ap-south-1.amazonaws.com;
              connect-src 'self' https://app.termly.io https://flagcdn.com https://static-uat.rivexa.com https://api.allorigins.win https://emp-service-documents-production.s3.ap-south-1.amazonaws.com https://emp-service-documents-uat.s3.ap-south-1.amazonaws.com https://api64.ipify.org https://www.google.co.in https://www.googleadservices.com https://googleads.g.doubleclick.net https://google.com https://td.doubleclick.net https://ipinfo.io https://restcountries.com https://uat-blogs.rivexa.com https://blogs.rivexa.com https://uat-customer.rivexa.com https://customer.rivexa.com https://maps.googleapis.com https://maps.google.com https://analytics.google.com https://px.ads.linkedin.com https://www.google.com;
              script-src 'self' 'unsafe-eval' 'unsafe-inline' https://app.termly.io https://static-uat.rivexa.com https://static.clevertap.com https://region.global https://ipinfo.io https://www.googleadservices.com https://td.doubleclick.net https://googleads.g.doubleclick.net https://maps.googleapis.com https://maps.google.com https://www.google.com https://www.googletagmanager.com https://snap.licdn.com https://px.ads.linkedin.com https://googleads.g.doubleclick.net;
              style-src 'self' 'unsafe-inline' https://static-uat.rivexa.com https://fonts.googleapis.com https://maps.googleapis.com;
              font-src 'self' https://static-uat.rivexa.com data:;
              img-src 'self' https://static-uat.rivexa.com https://www.googletagmanager.com https://flagcdn.com https://maps.gstatic.com https://maps.googleapis.com https://uat-portal.rivexa.com https://portal.rivexa.com https://px.ads.linkedin.com https://uat-blogs.rivexa.com data: https://blogs.rivexa.com data:;
              frame-src 'self' https://outlook.office365.com https://static-uat.rivexa.com https://maps.google.com https://www.google.com https://td.doubleclick.net https://www.googletagmanager.com/;
              object-src 'none';
              base-uri 'self';
              form-action 'self';
              frame-ancestors 'self';
              upgrade-insecure-requests;
            `
              .replace(/\s{2,}/g, " ")
              .trim(),
          },
          {
            key: "X-Permitted-Cross-Domain-Policies",
            value: "none",
          },
          {
            key: "Expect-CT",
            value:
              'max-age=31536000, enforce, report-uri="https://uat.rivexa.com"',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
