/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
      {
        source: '/embedded-ai-iot-product-engineer-course-internship-bangalore',
        destination: '/embedded-ai-iot-product-engineer-course-internship-bangalore/index.html',
      },
      {
        source: '/generative-ai-product-engineer-course-internship-bangalore',
        destination: '/generative-ai-product-engineer-course-internship-bangalore/index.html',
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/embedded-ai-iot-product-engineer',
        destination: '/embedded-ai-iot-product-engineer-course-internship-bangalore',
        permanent: true,
      },
      {
        source: '/embedded-ai-iot-product-engineer-course-bangalore',
        destination: '/embedded-ai-iot-product-engineer-course-internship-bangalore',
        permanent: true,
      },
      {
        source: '/knowx-genai-landing-v5',
        destination: '/generative-ai-product-engineer-course-internship-bangalore',
        permanent: true,
      },
      {
        source: '/generative-ai-product-engineer-course-bangalore',
        destination: '/generative-ai-product-engineer-course-internship-bangalore',
        permanent: true,
      },
      {
        source: '/index.php',
        destination: '/',
        permanent: true,
      },
      {
        source: '/about-us.php',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/contact.php',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/iot.php',
        destination: '/iot-product-development-company-bangalore',
        permanent: true,
      },
      {
        source: '/iot-product-development-company-bangalore.php',
        destination: '/iot-product-development-company-bangalore',
        permanent: true,
      },
      {
        source: '/embedded-system-and-product-engineering.php',
        destination: '/embedded-system-design-software-development-bangalore',
        permanent: true,
      },
      {
        source: '/embedded-software-development.php',
        destination: '/embedded-system-design-software-development-bangalore',
        permanent: true,
      },
      {
        source: '/embedded-product-engineering.php',
        destination: '/embedded-system-design-software-development-bangalore',
        permanent: true,
      },
      {
        source: '/services.php',
        destination: '/#services',
        permanent: true,
      },
      {
        source: '/internships-in-bangalore',
        destination: '/training-internship-engineering-students-bangalore',
        permanent: true,
      },
      {
        source: '/internships-in-bangalore/:path*',
        destination: '/training-internship-engineering-students-bangalore',
        permanent: true,
      },
      {
        source: '/staff-solutions/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/products/:path*',
        destination: '/#products',
        permanent: true,
      },
      {
        source: '/career.php',
        destination: '/',
        permanent: true,
      },
      {
        source: '/hardware-and-pcb-designing.php',
        destination: '/embedded-system-design-software-development-bangalore',
        permanent: true,
      },
      {
        source: '/makerslab-bangalore-projects',
        destination: '/training-internship-engineering-students-bangalore',
        permanent: false,
      },
      {
        source: '/makerslab-bangalore-projects/:path*',
        destination: '/training-internship-engineering-students-bangalore',
        permanent: false,
      },
    ];
  },
};

