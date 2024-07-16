/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    output: 'export',
    env: {

        //  local
        // REACT_APP_URI: 'https://localhost:8090',

        //GCP
        REACT_APP_URI: 'https://greeceenrollmentsummaryapi-wckqd7o3eq-uw.a.run.app/',


    },
    eslint: {

        ignoreDuringBuilds: true,
    },
    images: {

        unoptimized: true,
    },
};

export default nextConfig;
