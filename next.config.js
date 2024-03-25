/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
  experimental: {
    turbo: {
      rules: {
        "*.jsx": [
          {
            loader: "babel-loader",
            options: {
              presets: [
                [
                  "@babel/preset-react",
                  { runtime: "automatic", importSource: "@emotion/react" },
                ],
              ],
              plugins: ["babel-plugin-macros", "@emotion/babel-plugin"],
            },
          },
        ],
      },
    },
  },
};

module.exports = nextConfig;
